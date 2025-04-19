import { Request, Response, NextFunction } from 'express';
import { PrismaClient, User } from '../generated/prisma';
import path from 'path';
import fs from 'fs';
import asyncHandler from 'express-async-handler';

const prisma = new PrismaClient();

interface AuthenticatedRequest extends Request {
  user: User;
}

// Course Access
export const getUserCourses = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: userId } = req.params;

    const courses = await prisma.enrollment.findMany({
      where: { userId },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            description: true,
            duration: true
          }
        }
      }
    });

    res.json(courses.map(enrollment => ({
      ...enrollment.course,
      progress: enrollment.progress,
      status: enrollment.status
    })));
  } catch (error) {
    next(error);
  }
};

export const getCourseContent = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: courseId } = req.params;
    const user = (req as unknown as AuthenticatedRequest).user;
    
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    // Verify user is enrolled in the course
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        courseId,
        userId: user.id,
        OR: [
          { status: 'IN_PROGRESS' },
          { status: 'COMPLETED' }
        ]
      }
    });

    if (!enrollment) {
      res.status(403).json({ error: 'Not enrolled in this course' });
      return;
    }

    const courseContent = await prisma.course.findUnique({
      where: { id: courseId },
      select: {
        id: true,
        title: true,
        description: true,
        duration: true
      }
    });

    if (!courseContent) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    res.json(courseContent);
  } catch (error) {
    next(error);
  }
};

export const getCourseSlides = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: courseId } = req.params;
    const user = (req as unknown as AuthenticatedRequest).user;
    
    if (!user) {
      res.status(401).json({ error: 'Not authenticated' });
      return;
    }

    // Verify user is enrolled in the course
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        courseId,
        userId: user.id,
        OR: [
          { status: 'IN_PROGRESS' },
          { status: 'COMPLETED' }
        ]
      }
    });

    if (!enrollment) {
      res.status(403).json({ error: 'Not enrolled in this course' });
      return;
    }

    const courseSlides = await prisma.course.findUnique({
      where: { id: courseId },
      select: {
        slides: true
      }
    });

    if (!courseSlides) {
      res.status(404).json({ error: 'Course slides not found' });
      return;
    }

    res.json(courseSlides);
  } catch (error) {
    next(error);
  }
};

// Progress Tracking
export const getUserProgress = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: userId } = req.params;

    const progress = await prisma.enrollment.findMany({
      where: { userId },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            duration: true
          }
        }
      }
    });

    const progressStats = {
      totalCourses: progress.length,
      completedCourses: progress.filter(p => p.status === 'COMPLETED').length,
      inProgressCourses: progress.filter(p => p.status === 'IN_PROGRESS').length,
      averageProgress: progress.reduce((acc, p) => acc + p.progress, 0) / progress.length || 0,
      courses: progress.map(p => ({
        courseId: p.course.id,
        courseTitle: p.course.title,
        progress: p.progress,
        status: p.status
      }))
    };

    res.json(progressStats);
  } catch (error) {
    next(error);
  }
};

export const updateProgress = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: courseId } = req.params;
    const { progress, moduleId } = req.body;
    const userId = req.user.id;

    if (progress < 0 || progress > 100) {
      res.status(400).json({ error: 'Progress must be between 0 and 100' });
      return;
    }

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        userId: userId!,
        courseId
      }
    });

    if (!enrollment) {
      res.status(404).json({ error: 'Enrollment not found' });
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
    next(error);
  }
};

// Certificate Management
export const getUserCertificates = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: userId } = req.params;

    const certificates = await prisma.certificate.findMany({
      where: { userId }
    });

    const courses = await prisma.course.findMany({
      where: {
        id: {
          in: certificates.map(cert => cert.courseId)
        }
      }
    });

    res.json(certificates.map(cert => ({
      ...cert,
      course: courses.find(c => c.id === cert.courseId)
    })));
  } catch (error) {
    next(error);
  }
};

export const generateCertificate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { courseId } = req.body;
    const userId = req.user.id;

    // Verify course completion
    const enrollment = await prisma.enrollment.findFirst({
      where: {
        courseId,
        userId,
        status: 'COMPLETED'
      }
    });

    if (!enrollment) {
      res.status(403).json({ error: 'Course not completed' });
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
      res.status(400).json({ error: 'Certificate already generated' });
      return;
    }

    // Generate certificate
    const certificate = await prisma.certificate.create({
      data: {
        userId: userId!,
        courseId,
        issuedAt: new Date(),
        certificateUrl: `CERT-${Date.now()}-${userId!.substring(0, 6)}`
      }
    });

    const course = await prisma.course.findUnique({
      where: { id: certificate.courseId }
    });

    const user = await prisma.user.findUnique({
      where: { id: certificate.userId }
    });

    res.status(201).json({
      ...certificate,
      courseName: course?.title,
      userName: user?.name
    });
  } catch (error) {
    next(error);
  }
};

export const downloadCertificate = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: certificateId } = req.params;
    const userId = req.user.id;

    const certificate = await prisma.certificate.findFirst({
      where: {
        id: certificateId,
        userId
      }
    });

    if (!certificate) {
      res.status(404).json({ error: 'Certificate not found' });
      return;
    }

    const course = await prisma.course.findUnique({
      where: { id: certificate.courseId }
    });

    const user = await prisma.user.findUnique({
      where: { id: certificate.userId }
    });

    res.json({
      id: certificate.id,
      courseId: certificate.courseId,
      userId: certificate.userId,
      issuedAt: certificate.issuedAt,
      certificateUrl: certificate.certificateUrl,
      courseName: course?.title,
      userName: user?.name

    });
  } catch (error) {
    next(error);
  }
};

export const getUserProfile = asyncHandler(async (req: Request, res: Response) => {
  const user = req.user as any;
  if (!user) {
    res.status(401).json({ success: false, message: 'User not authenticated' });
    return;
  }

  res.json({
    success: true,
    name: user.name,
    email: user.email
  });
}); 