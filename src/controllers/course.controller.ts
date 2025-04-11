import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma';
import { generateMCQs, generateSlideExplanations } from '../services/ai.service';
import { uploadToS3, getSignedUrl } from '../services/aws.service';
import multer, { FileFilterCallback } from 'multer';
import { v4 as uuidv4 } from 'uuid';

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
        targetAudience,
        companyName
      } = req.body as CourseRequest;

      // Upload file to S3
      const fileKey = `courses/${uuidv4()}-${req.file.originalname}`;
      const s3Url = await uploadToS3(req.file.buffer, fileKey);

      // Generate slide explanations from AI
      const slideExplanations = await generateSlideExplanations(s3Url, companyName);

      // Generate MCQs from AI
      const mcqs = await generateMCQs(s3Url);

      // Create course with all details
      const course = await prisma.course.create({
        data: {
          title,
          description,
          duration: Number(duration),
          tags: typeof tags === 'string' ? tags.split(',').map(tag => tag.trim()) : tags,
          learningObjectives: Array.isArray(learningObjectives) ? learningObjectives : [learningObjectives],
          targetAudience: typeof targetAudience === 'string' ? targetAudience.split(',').map(audience => audience.trim()) : targetAudience,
          materialUrl: s3Url,
          slides: slideExplanations.map(slide => ({
            ...slide,
            [slide.slideNumber.toString()]: slide
          })),
          mcqs: {
            create: mcqs.map(mcq => ({
              question: mcq.question,
              options: mcq.options,
              correctAnswer: mcq.correctAnswer,
              explanation: mcq.explanation
            }))
          }
        },
        include: {
          mcqs: true
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
    const tenantCourse = await prisma.tenantCourse.create({
      data: {
        courseId,
        tenantId
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