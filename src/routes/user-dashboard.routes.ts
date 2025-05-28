import { Router, Request, Response, NextFunction } from 'express';
import {
  getUserCourses,
  getCourseContent,
  getCourseSlides,
  getUserProgress,
  updateProgress,
  getUserCertificates,
  generateCertificate,
  downloadCertificate,
  getUserProfile,
  getUserDashboardCourses
} from '../controllers/user-dashboard.controller';
import { getCourseById } from '../controllers/course.controller';
import passport from '../config/passport';
import asyncHandler from 'express-async-handler';
import { AuthenticatedRequest } from '../types/authenticated-request';
import { PrismaClient } from '../generated/prisma';

const router = Router();
const prisma = new PrismaClient();

// === Working Routes ===
router.get('/courses', asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const user = (req as unknown as AuthenticatedRequest).user;
  if (!user) {
    res.status(401).json({ error: 'User not authenticated' });
    return;
  }
  req.params.id = user.id;
  await getUserCourses(req, res, next);
}));

router.get('/courses/:id', asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  await getCourseById(req, res, next);
}));

router.get(
  '/courses/:id/content',
  passport.authenticate('jwt', { session: false }),
  asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
    const user = (req as unknown as AuthenticatedRequest).user;
    if (!user) {
      res.status(401).json({ error: 'User not authenticated' });
      return;
    }
    await getCourseContent(Object.assign(req, { user }) as Request, res, next);
  })
);

// 1. Course Slides Route
router.get('/courses/:id/slides', asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  const user = (req as unknown as AuthenticatedRequest).user;
  if (!user) {
    res.status(401).json({ error: 'User not authenticated' });
    return;
  }
  await getCourseSlides(Object.assign(req, { user }) as Request, res, next);
}));

// 2. User Progress Routes
router.get('/users/:id/progress', asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  await getUserProgress(req, res, next);
}));

router.patch('/courses/:id/progress', asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const courseId = req.params.id;
    const { progress, moduleId, userId } = req.body;

    if (!userId) {
      res.status(400).json({ error: 'userId is required in request body' });
      return;
    }

    if (progress === undefined || progress === null) {
      res.status(400).json({ error: 'progress is required in request body' });
      return;
    }

    if (typeof progress !== 'number' || progress < 0 || progress > 100) {
      res.status(400).json({ error: 'Progress must be a number between 0 and 100' });
      return;
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        userId,
        courseId
      }
    });

    if (!enrollment) {
      res.status(404).json({ error: 'Enrollment not found. User must be enrolled in the course.' });
      return;
    }

    const updatedEnrollment = await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: {
        progress,
        status: progress === 100 ? 'COMPLETED' : 'IN_PROGRESS',
        ...(moduleId && {
          completedModules: {
            push: moduleId
          }
        })
      }
    });

    res.json(updatedEnrollment);
  } catch (error) {
    console.error('Error updating progress:', error);
    res.status(500).json({ 
      error: 'Failed to update progress',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}));

// 3. Certificate Routes
router.get('/users/:id/certificates', asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  await getUserCertificates(req, res, next);
}));

router.post('/certificates', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { courseId, userId } = req.body;

    if (!courseId || !userId) {
      res.status(400).json({ error: 'courseId and userId are required' });
      return;
    }

    // First check if enrollment exists
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        courseId,
        userId
      }
    });

    if (!enrollment) {
      res.status(404).json({ 
        error: 'Enrollment not found',
        details: 'User is not enrolled in this course'
      });
      return;
    }

    // Then check completion status
    if (enrollment.status !== 'COMPLETED') {
      res.status(403).json({ 
        error: 'Course not completed',
        details: `Current status: ${enrollment.status}, Progress: ${enrollment.progress}%`
      });
      return;
    }

    // Check if certificate already exists
    const existingCertificate = await prisma.certificate.findFirst({
      where: {
        courseId,
        userId
      }
    });

    if (existingCertificate) {
      res.status(400).json({ 
        error: 'Certificate already exists',
        certificateId: existingCertificate.id
      });
      return;
    }

    // Get user and course details first
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const course = await prisma.course.findUnique({ where: { id: courseId } });

    if (!user || !course) {
      res.status(404).json({ error: 'User or course not found' });
      return;
    }

    // Generate certificate
    const certificate = await prisma.certificate.create({
      data: {
        userId,
        courseId,
        issuedAt: new Date(),
        certificateUrl: `CERT-${Date.now()}-${userId.substring(0, 6)}`
      }
    });

    res.status(201).json({
      id: certificate.id,
      userId: certificate.userId,
      courseId: certificate.courseId,
      certificateUrl: certificate.certificateUrl,
      issuedAt: certificate.issuedAt,
      userName: user.name,
      courseName: course.title  
    });
  } catch (error) {
    console.error('Error generating certificate:', error);
    res.status(500).json({ 
      error: 'Failed to generate certificate',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}));

router.get('/certificates/:id/download', asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction) => {
  try {
    const { id: certificateId } = req.params;

    // First get the certificate
    const certificate = await prisma.certificate.findUnique({
      where: { id: certificateId }
    });

    if (!certificate) {
      res.status(404).json({ error: 'Certificate not found' });
      return;
    }

    // Then get user and course details separately
    const user = await prisma.user.findUnique({
      where: { id: certificate.userId }
    });

    const course = await prisma.course.findUnique({
      where: { id: certificate.courseId }
    });

    if (!user || !course) {
      res.status(404).json({ error: 'Certificate data incomplete' });
      return;
    }

    // Return certificate details
    res.json({
      id: certificate.id,
      userId: certificate.userId,
      courseId: certificate.courseId,
      certificateUrl: certificate.certificateUrl,
      issuedAt: certificate.issuedAt,
      userName: user.name,
      courseName: course.title
    });
  } catch (error) {
    console.error('Error downloading certificate:', error);
    res.status(500).json({ 
      error: 'Failed to download certificate',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}));

// Protected route - requires JWT authentication
router.get('/profile', passport.authenticate('jwt', { session: false }), asyncHandler(getUserProfile));

// Store certificate URL
router.post('/certificates/store', asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId, certificateUrl, courseId } = req.body;

    if (!userId || !certificateUrl || !courseId) {
      res.status(400).json({ error: 'userId, certificateUrl, and courseId are required' });
      return;
    }

    // Verify user exists
    const user = await prisma.user.findUnique({
      where: { id: userId }
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    // Create certificate record
    const certificate = await prisma.certificate.create({
      data: {
        userId,
        courseId,
        certificateUrl,
        issuedAt: new Date()
      }
    });

    res.status(201).json({
      success: true,
      certificate: {
        id: certificate.id,
        userId: certificate.userId,
        courseId: certificate.courseId,
        certificateUrl: certificate.certificateUrl,
        issuedAt: certificate.issuedAt
      }
    });
  } catch (error) {
    console.error('Error storing certificate:', error);
    res.status(500).json({ 
      error: 'Failed to store certificate',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}));

router.get('/dashboard/:userId/courses', asyncHandler(getUserDashboardCourses));

export default router; 

export { getUserDashboardCourses }; 