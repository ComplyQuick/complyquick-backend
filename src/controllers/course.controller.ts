import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma';
import { generateMCQs, generateSlideExplanations } from '../services/ai.service';
import { uploadToS3, getSignedUrl } from '../services/aws.service';
import multer, { FileFilterCallback } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { aiServiceClient } from '../services/ai.service';
// import { generateVideoFromSlides } from '../services/video.service';
import { generateAndStoreExplanations, getSlideExplanations } from '../services/slide.service';
import { Prisma } from '@prisma/client';
// import { processCourseSlides as processSlides } from '../services/video.service';

const prisma = new PrismaClient();

interface CourseRequest {
  title: string;
  description: string;
  duration: number;
  tags: string | string[];
  learningObjectives: string | string[];
  targetAudience: string | string[];
  companyName: string;
}

interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

// Configure multer for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024 // 25MB limit
  },
  fileFilter: (_req: Request, file: Express.Multer.File, cb: FileFilterCallback) => {
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and PPTX files are allowed.'));
    }
  }
}).single('courseMaterial');

// Create a new course
export const createCourse = async (
  req: RequestWithFile,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Handle file upload
    upload(req, res, async (err: any) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }

      if (!req.file) {
        res.status(400).json({ error: 'Course material file is required' });
        return;
      }

      const {
        title,
        description,
        duration,
        tags,
        learningObjectives,
        targetAudience
      } = req.body as CourseRequest;

      // Upload file to S3
      const fileKey = `courses/${uuidv4()}-${req.file.originalname}`;
      const s3Url = await uploadToS3(req.file.buffer, fileKey);

      // Create course with file URL
      const course = await prisma.course.create({
        data: {
          title,
          description,
          duration: Number(duration),
          tags: typeof tags === 'string' ? tags.split(',').map(tag => tag.trim()) : tags,
          learningObjectives: Array.isArray(learningObjectives) ? learningObjectives : [learningObjectives],
          targetAudience: typeof targetAudience === 'string' ? targetAudience.split(',').map(audience => audience.trim()) : targetAudience,
          materialUrl: s3Url,
          slides: []
        }
      });

      res.status(201).json(course);
    });
  } catch (error) {
    next(error);
  }
};

// Get all courses
export const getAllCourses = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const courses = await prisma.course.findMany({
      include: {
        tenants: true
      }
    });
    res.json(courses);
  } catch (error) {
    next(error);
  }
};

// Get course by ID
export const getCourseById = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        tenants: true
      }
    });
    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }
    res.json(course);
  } catch (error) {
    next(error);
  }
};

// Update course
export const updateCourse = async (
  req: Request<{ id: string }, any, Partial<CourseRequest>>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { title, description, duration } = req.body;
    const course = await prisma.course.update({
      where: { id },
      data: {
        title,
        description,
        duration
      }
    });
    res.json(course);
  } catch (error) {
    next(error);
  }
};

// Delete course
export const deleteCourse = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.course.delete({
      where: { id }
    });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
  
// Assign course to tenant
export const assignCourseToTenant = async (
  req: Request<{}, any, { courseId: string; tenantId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { courseId, tenantId } = req.body;

    // Get course and tenant details
    const course = await prisma.course.findUnique({
      where: { id: courseId }
    });

    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId }
    });

    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }

    // Check if course is already assigned to tenant
    const existingAssignment = await prisma.tenantCourse.findFirst({
      where: {
        courseId,
        tenantId
      }
    });

    if (existingAssignment) {
      res.status(400).json({ error: 'Course is already assigned to this tenant' });
      return;
    }

    // Generate explanations
    let explanations;
    try {
      explanations = await generateSlideExplanations(course.materialUrl, tenant.name);
    } catch (error) {
      console.error('Error generating explanations:', error);
      explanations = null;
    }

    // Create tenant course assignment with explanations
    const tenantCourse = await prisma.tenantCourse.create({
      data: {
        courseId,
        tenantId,
        explanations: explanations as any
      },
      include: {
        course: true,
        tenant: true
      }
    });

    res.status(201).json(tenantCourse);
  } catch (error) {
    next(error);
  }
};

// Get course statistics
export const getCourseStats = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const totalCourses = await prisma.course.count();
    const totalEnrollments = await prisma.enrollment.count();
    const completedEnrollments = await prisma.enrollment.count({
      where: {
        status: 'COMPLETED'
      }
    });

    res.json({
      totalCourses,
      totalEnrollments,
      completedEnrollments,
      completionRate: totalEnrollments > 0 ? (completedEnrollments / totalEnrollments) * 100 : 0
    });
  } catch (error) {
    next(error);
  }
};

// Submit MCQ answers and check completion
export const submitMCQAnswers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { courseId } = req.params;
    const { userId, answers } = req.body;

    let correctAnswers = 0;
    const totalQuestions = answers.length;

    // Process each answer
    for (const answer of answers) {
      const mcq = await prisma.mCQ.findUnique({
        where: { id: answer.mcqId }
      });

      const isCorrect = mcq?.correctAnswer === answer.answer;
      if (isCorrect) correctAnswers++;

      // Save user's answer
      await prisma.userMCQAnswer.create({
        data: {
          userId,
          mcqId: answer.mcqId,
          answer: answer.answer,
          isCorrect
        }
      });
    }

    // Calculate score percentage
    const scorePercentage = (correctAnswers / totalQuestions) * 100;

    // Update course progress if score is sufficient
    if (scorePercentage >= 70) { // Passing score is 70%
      const enrollment = await prisma.enrollment.findFirst({
        where: {
          userId,
          courseId
        }
      });

      if (enrollment) {
        await prisma.enrollment.update({
          where: { id: enrollment.id },
          data: {
            progress: 100,
            status: 'COMPLETED'
          }
        });
      }

      res.json({
        message: 'Course completed successfully!',
        score: scorePercentage,
        status: 'COMPLETED'
      });
    } else {
      res.json({
        message: 'Please try again to achieve a passing score.',
        score: scorePercentage,
        status: 'IN_PROGRESS'
      });
    }
  } catch (error) {
    next(error);
  }
};

// Get course content with signed URLs
export const getCourseContent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const course = await prisma.course.findUnique({
      where: { id },
      include: {
        mcqs: true
      }
    });

    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    // Generate signed URL for course material
    const materialSignedUrl = await getSignedUrl(course.materialUrl);

    res.json({
      ...course,
      materialUrl: materialSignedUrl
    });
  } catch (error) {
    next(error);
  }
};

// Process course slides and generate video
export const processCourseSlides = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id: courseId } = req.params;
    const { tenantId } = req.body;

    console.log('Processing course slides:', { courseId, tenantId });

    // Validate tenantId
    if (!tenantId) {
      res.status(400).json({ error: 'Tenant ID is required' });
      return;
    }

    // Handle both array and string input for tenantId
    const tenantIdToUse = Array.isArray(tenantId) ? tenantId[0] : tenantId;

    // Get tenant course assignment with explanations
    const tenantCourse = await prisma.tenantCourse.findFirst({
      where: {
        courseId,
        tenantId: tenantIdToUse
      },
      include: {
        course: true,
        tenant: true
      }
    });

    if (!tenantCourse) {
      res.status(404).json({ error: 'Course not assigned to this tenant' });
      return;
    }

    // If explanations exist, return them
    if (tenantCourse.explanations) {
      const parsedExplanations = typeof tenantCourse.explanations === 'string' 
        ? JSON.parse(tenantCourse.explanations)
        : tenantCourse.explanations;
        
      res.json({ 
        message: 'Slides processed successfully', 
        explanations: parsedExplanations
      });
      return;
    }

    // If no explanations, generate them
    try {
      const explanations = await generateSlideExplanations(tenantCourse.course.materialUrl, tenantCourse.tenant.name);

      // Update tenant course with explanations
      await prisma.tenantCourse.update({
        where: { id: tenantCourse.id },
        data: {
          explanations: explanations as any
        }
      });

      res.json({ 
        message: 'Slides processed successfully', 
        explanations
      });
    } catch (error) {
      console.error('Error in slide processing:', error);
      res.status(500).json({ 
        error: 'Failed to process slides',
        details: error instanceof Error ? error.message : 'Unknown error',
        courseId,
        tenantId: tenantIdToUse
      });
    }
  } catch (error) {
    console.error('Error in processCourseSlides:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// Test AI service connection
export const testAIService = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const response = await aiServiceClient.get('/health');
    res.json({
      status: 'AI service is connected',
      response: response.data
    });
  } catch (error) {
    console.error('AI service connection test failed:', error);
    res.status(500).json({
      error: 'AI service connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export const generateExplanations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId } = req.params;
    const { tenantId } = req.body;

    if (!tenantId) {
      res.status(400).json({ error: 'Tenant ID is required' });
      return;
    }

    const tenantCourse = await prisma.tenantCourse.findFirst({
      where: {
        courseId,
        tenantId
      },
      include: {
        course: true,
        tenant: true
      }
    });

    if (!tenantCourse) {
      res.status(404).json({ error: 'Course not assigned to this tenant' });
      return;
    }

    const explanations = await generateSlideExplanations(tenantCourse.course.materialUrl, tenantCourse.tenant.name);

    // Store explanations in tenant course
    await prisma.tenantCourse.update({
      where: { id: tenantCourse.id },
      data: {
        explanations: explanations as any
      }
    });

    res.json({ explanations });
  } catch (error) {
    next(error);
  }
};

export const fetchExplanations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId } = req.params;
    const { tenantId } = req.query;

    if (!tenantId) {
      res.status(400).json({ error: 'Tenant ID is required' });
      return;
    }

    const tenantCourse = await prisma.tenantCourse.findFirst({
      where: {
        courseId,
        tenantId: tenantId as string
      }
    });

    if (!tenantCourse) {
      res.status(404).json({ error: 'Course not assigned to this tenant' });
      return;
    }

    res.json({ explanations: tenantCourse.explanations });
  } catch (error) {
    next(error);
  }
}; 