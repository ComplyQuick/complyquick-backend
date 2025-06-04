import { Request, Response, NextFunction } from 'express';
import { PrismaClient, UserRole } from '../generated/prisma';
import { generateMCQs, generateSlideExplanations } from '../services/ai.service';
import { uploadToS3, getSignedUrl } from '../services/aws.service';
import multer, { FileFilterCallback } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { aiServiceClient } from '../services/ai.service';
// import { generateVideoFromSlides } from '../services/video.service';
import { generateAndStoreExplanations, getSlideExplanations } from '../services/slide.service';
import { Prisma } from '@prisma/client';
// import { processCourseSlides as processSlides } from '../services/video.service';
import { uploadToGoogleDrive } from '../services/google-drive.service';

const prisma = new PrismaClient();

interface CourseRequest {
  title: string;
  description: string;
  tags: string | string[];
  learningObjectives: string | string[];
  companyName: string;
}

interface RequestWithFile extends Request {
  file?: Express.Multer.File;
}

export interface AuthenticatedRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: UserRole;
    tenantId: string;
  };
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

function toBool(val: any): boolean {
  return val === true || val === 'true' || val === 1 || val === '1';
}

// Create a new course
export const createCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { title, description, tags, learningObjectives } = req.body;
    const file = req.file;

    if (!file) {
      res.status(400).json({ error: 'Course material file is required' });
      return;
    }

    // Validate required fields
    if (!title || !description || !tags || !learningObjectives) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    // Upload to Google Drive and get the Google Slides URL
    const slidesUrl = await uploadToGoogleDrive(file.buffer, `${title}-${file.originalname}`);

    const course = await prisma.course.create({
      data: {
        title,
        description,
        tags,
        learningObjectives,
        materialUrl: slidesUrl,
        slides: []
      }
    });

    res.status(201).json(course);
  } catch (error) {
    console.error('Error creating course:', error);
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
    const { title, description } = req.body;
    // Update course main fields
    const course = await prisma.course.update({
      where: { id },
      data: {
        title,
        description
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
  req: Request<{}, any, { 
    courseId: string; 
    tenantId: string; 
    skippable?: boolean | string; 
    mandatory?: boolean | string; 
    retryType?: 'SAME' | 'DIFFERENT';
    pocs?: Array<{ role: string; name: string; contact: string }>;
  }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { courseId, tenantId, skippable, mandatory, retryType, pocs = [] } = req.body;

    // Get course and tenant details
    const course = await prisma.course.findUnique({
      where: { id: courseId }
    });

    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { details: true }
    });

    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }

    if (!tenant.details) {
      res.status(400).json({ error: 'Tenant details not found' });
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
      explanations = await generateSlideExplanations(
        course.materialUrl,
        tenant.name,
        pocs
      );
    } catch (error) {
      console.error('Error generating explanations:', error);
      explanations = null;
    }

    // Create tenant course assignment with explanations and properties
    const tenantCourse = await prisma.tenantCourse.create({
      data: {
        courseId,
        tenantId,
        explanations: explanations ? explanations as any : undefined,
        skippable: toBool(skippable),
        mandatory: toBool(mandatory),
        retryType: retryType === 'DIFFERENT' ? 'DIFFERENT' : 'SAME'
      },
      include: {
        course: true,
        tenant: true
      }
    });

    // Save POCs if provided
    if (Array.isArray(pocs) && pocs.length > 0) {
      await prisma.tenantCourseDetails.createMany({
        data: pocs.map(poc => ({
          tenantCourseId: tenantCourse.id,
          role: poc.role,
          name: poc.name,
          contact: poc.contact
        }))
      });
    }

    // Fetch the created assignment with POCs
    const createdAssignment = await prisma.tenantCourse.findUnique({
      where: { id: tenantCourse.id },
      include: {
        course: true,
        tenant: true,
        details: true // Include POCs
      }
    });

    res.status(201).json(createdAssignment);
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
        tenant: true,
        details: true
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
      const pocs = tenantCourse.details.map(detail => ({
        role: detail.role,
        name: detail.name,
        contact: detail.contact
      }));

      const explanations = await generateSlideExplanations(
        tenantCourse.course.materialUrl,
        tenantCourse.tenant.name,
        pocs
      );

      // Update tenant course with explanations
      await prisma.tenantCourse.update({
        where: { 
          id: tenantCourse.id
        },
        data: {
          explanations: JSON.stringify(explanations)
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
        tenant: true,
        details: true // Fetch POCs
      }
    });

    if (!tenantCourse) {
      res.status(404).json({ error: 'Course not assigned to this tenant' });
      return;
    }

    // Build POC array
    const pocs = tenantCourse.details.map(detail => ({
      role: detail.role,
      name: detail.name,
      contact: detail.contact
    }));

    const explanations = await generateSlideExplanations(
      tenantCourse.course.materialUrl,
      tenantCourse.tenant.name,
      pocs
    );

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
      },
      include: {
        course: true,
        tenant: {
          include: {
            details: true
          }
        }
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

export const getCourseMaterialForChatbot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId } = req.params;
    const { tenantId } = req.query;

    if (!tenantId) {
      res.status(400).json({ error: 'Tenant ID is required' });
      return;
    }

    // Get the course material URL from tenant course
    const tenantCourse = await prisma.tenantCourse.findFirst({
      where: {
        courseId,
        tenantId: tenantId as string
      },
      include: {
        course: true
      }
    });

    if (!tenantCourse) {
      res.status(404).json({ error: 'Course not found or not assigned to this tenant' });
      return;
    }

    res.json({ 
      materialUrl: tenantCourse.course.materialUrl,
      courseId: courseId,
      tenantId: tenantId
    });
  } catch (error) {
    next(error);
  }
};

export const updateCourseProgress = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { courseId } = req.params;
    const { slideNumber } = req.body;
    const userId = req.user?.id;
    const tenantId = req.user?.tenantId;
    
    console.log('[updateCourseProgress] Called with:', { userId, tenantId, courseId, slideNumber });

    if (!slideNumber) {
      res.status(400).json({ error: 'Slide number is required' });
      return;
    }

    if (!userId || !tenantId) {
      res.status(401).json({ error: 'User not authenticated' });
      return;
    }

    // Get the tenant course to find total slides from explanations
    const tenantCourse = await prisma.tenantCourse.findFirst({
      where: {
        courseId,
        tenantId
      },
      select: { 
        explanations: true 
      }
    });

    if (!tenantCourse) {
      res.status(404).json({ error: 'Course not found or not assigned to tenant' });
      return;
    }

    // Parse explanations if it's a string
    const explanations = typeof tenantCourse.explanations === 'string' 
      ? JSON.parse(tenantCourse.explanations)
      : tenantCourse.explanations;

    if (!explanations || !Array.isArray(explanations)) {
      res.status(400).json({ error: 'No slides found for this course' });
      return;
    }

    const totalSlides = explanations.length;

    if (slideNumber > totalSlides) {
      res.status(400).json({ error: 'Invalid slide number' });
      return;
    }

    // Calculate new progress percentage with 2 decimal places
    const newProgress = Number(((slideNumber / totalSlides) * 100).toFixed(2));

    // Find existing enrollment
    let enrollment = await prisma.enrollment.findFirst({
      where: {
        userId,
        courseId
      }
    });

    if (!enrollment) {
      // Create new enrollment if it doesn't exist
      enrollment = await prisma.enrollment.create({
        data: {
          userId,
          courseId,
          progress: newProgress,
          status: newProgress === 100 ? 'COMPLETED' : 'IN_PROGRESS'
        }
      });
    } else {
      // Only update if new progress is greater than current progress
      if (newProgress > Number(enrollment.progress)) {
        enrollment = await prisma.enrollment.update({
          where: { id: enrollment.id },
          data: {
            progress: newProgress,
            status: newProgress === 100 ? 'COMPLETED' : 'IN_PROGRESS'
          }
        });
      }
    }

    res.json({
      message: 'Progress updated successfully',
      progress: Number(enrollment.progress),
      totalSlides,
      currentSlide: slideNumber
    });
  } catch (error) {
    console.error('[updateCourseProgress] Error updating course progress:', error);
    next(error);
  }
};

export const generalChatbot = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { tenantId, chatHistory } = req.body;
    // Log incoming request
    console.log('[generalChatbot] Incoming request:', { tenantId, chatHistory });

    if (!tenantId || !chatHistory) {
      res.status(400).json({ error: 'tenantId and chatHistory are required' });
      return;
    }

    // Fetch tenant, details, and assigned courses
    console.log('[generalChatbot] Fetching tenant and related data from DB');
    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { details: true, courses: { include: { course: true } } }
    });
    if (!tenant) {
      console.log('[generalChatbot] Tenant not found:', tenantId);
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }
    if (!tenant.details) {
      console.log('[generalChatbot] Tenant details not found:', tenantId);
      res.status(400).json({ error: 'Tenant details not found' });
      return;
    }

    // Prepare assigned_courses with sanitized strings and required 'name' field
    console.log('[generalChatbot] Preparing assigned_courses payload');
    const assigned_courses = tenant.courses.map(tc => {
      const sanitizedTitle = typeof tc.course.title === 'string' ? tc.course.title.replace(/^"+|"+$/g, '') : tc.course.title;
      return {
        id: tc.course.id,
        name: sanitizedTitle, // required by AI service
        title: sanitizedTitle,
        description: typeof tc.course.description === 'string' ? tc.course.description.replace(/^"+|"+$/g, '') : tc.course.description,
        materialUrl: tc.course.materialUrl
      };
    });

    // Prepare payload for AI service
    const payload = {
      chatHistory,
      company_name: tenant.name,
      tenant_details: tenant.details,
      assigned_courses
    };
    console.log('[generalChatbot] Sending payload to AI service:', payload);

    // Call AI service
    try {
      const aiResponse = await aiServiceClient.post('/general-chatbot', payload);
      // Log AI service response
      console.log('[generalChatbot] AI service response:', aiResponse.data);
      res.json(aiResponse.data);
    } catch (error: any) {
      // Log AI service error
      console.error('[generalChatbot] AI service error:', error.response ? error.response.data : error);
      if (error.response) {
        res.status(error.response.status).json(error.response.data);
      } else {
        next(error);
      }
    }
  } catch (error) {
    // Log unexpected error
    console.error('[generalChatbot] Unexpected error:', error);
    next(error);
  }
};

export const getUserCourseProgress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId, courseId } = req.query;

    if (!userId || !courseId) {
      res.status(400).json({ error: 'userId and courseId are required' });
      return;
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        userId: userId as string,
        courseId: courseId as string
      },
      include: {
        course: true,
        user: true
      }
    });

    if (!enrollment) {
      res.status(404).json({ error: 'No enrollment found for this user and course' });
      return;
    }

    res.json({
      userId: enrollment.userId,
      courseId: enrollment.courseId,
      progress: Number(enrollment.progress),
      status: enrollment.status,
      courseTitle: enrollment.course.title,
      userName: enrollment.user.name
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUsersProgress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      include: {
        course: true,
        user: {
          include: {
            tenant: true
          }
        }
      }
    });

    const progressData = enrollments.map(enrollment => ({
      userId: enrollment.userId,
      userName: enrollment.user.name,
      courseId: enrollment.courseId,
      courseTitle: enrollment.course.title,
      progress: Number(enrollment.progress),
      status: enrollment.status,
      tenantName: enrollment.user.tenant?.name || 'No Tenant',
      tenantId: enrollment.user.tenantId
    }));

    res.json(progressData);
  } catch (error) {
    next(error);
  }
};

/**
 * Add POCs (points of contact) for a course assignment (TenantCourse)
 * POST /api/courses/add-poc
 * Body: {
 *   tenantId: string,
 *   courseId: string,
 *   pocs: [ { role: string, name: string, contact: string }, ... ]
 * }
 */
export const addPOCForCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { tenantId, courseId, pocs } = req.body;
    console.log('[addPOCForCourse] Received:', { tenantId, courseId, pocs });

    if (!tenantId || !courseId || !Array.isArray(pocs) || pocs.length === 0) {
      res.status(400).json({ error: 'tenantId, courseId, and pocs[] are required' });
      return;
    }

    for (const poc of pocs) {
      if (!poc.role || !poc.name || !poc.contact) {
        res.status(400).json({ error: 'Each POC must have role, name, and contact' });
        return;
      }
    }

    // Find or create TenantCourse
    let tenantCourse = await prisma.tenantCourse.findFirst({
      where: { tenantId, courseId }
    });
    if (!tenantCourse) {
      tenantCourse = await prisma.tenantCourse.create({
        data: {
          tenantId,
          courseId,
          skippable: false,
          mandatory: false,
          retryType: 'SAME'
        }
      });
      console.log('[addPOCForCourse] Created new TenantCourse:', tenantCourse.id);
    }

    // Create POCs
    const createdPOCs = await prisma.tenantCourseDetails.createMany({
      data: pocs.map((poc: { role: string; name: string; contact: string }) => ({
        tenantCourseId: tenantCourse.id,
        role: poc.role,
        name: poc.name,
        contact: poc.contact
      }))
    });

    console.log('[addPOCForCourse] Created:', createdPOCs);
    res.status(201).json({ message: 'POCs added successfully', count: createdPOCs.count, tenantCourseId: tenantCourse.id });
  } catch (error) {
    console.error('[addPOCForCourse] Error:', error);
    next(error);
  }
};