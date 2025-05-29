import { Request, Response, NextFunction } from 'express';
import { UserRole } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import { prisma } from '../lib/prisma';

interface AddUserRequest {
  email: string;
  name: string;
  password: string;
}

interface AssignCourseRequest {
  userIds: string[];
}

// User Management
export const getTenantUsers = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: tenantId } = req.params;
    const users = await prisma.user.findMany({
      where: { tenantId },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        enrollments: {
          include: {
            course: true
          }
        }
      }
    });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

export const addUserToTenant = async (
  req: Request<{ id: string }, any, AddUserRequest>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: tenantId } = req.params;
    const { email, name, password } = req.body;

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: UserRole.USER,
        tenantId
      }
    });

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const removeUserFromTenant = async (
  req: Request<{ id: string; userId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: tenantId, userId } = req.params;

    // Verify user belongs to tenant
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
        tenantId
      }
    });

    if (!user) {
      res.status(404).json({ error: 'User not found in tenant' });
      return;
    }

    await prisma.user.delete({
      where: { id: userId }
    });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

// Course Management
export const getTenantCourses = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id: tenantId } = req.params;
    const courses = await prisma.tenantCourse.findMany({
      where: { tenantId },
      include: {
        course: true
      }
    });
    res.json(courses);
  } catch (error) {
    next(error);
  }
};

export const assignCourseToUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { courseId, userIds } = req.body;

    if (!courseId || !userIds || !Array.isArray(userIds) || userIds.length === 0) {
      res.status(400).json({ error: 'courseId and userIds[] are required' });
      return;
    }

    // Get the tenantId from the first user (all users should belong to the same tenant)
    const user = await prisma.user.findUnique({ where: { id: userIds[0] } });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    const tenantId = user.tenantId;
    if (!tenantId) {
      res.status(400).json({ error: 'User does not belong to a tenant' });
      return;
    }

    // Ensure TenantCourse exists
    let tenantCourse = await prisma.tenantCourse.findFirst({
      where: { tenantId, courseId }
    });
    if (!tenantCourse) {
      tenantCourse = await prisma.tenantCourse.create({
        data: { tenantId, courseId }
      });
    }

    // Create enrollments for each user (skip if already enrolled)
    const enrollments = await Promise.all(
      userIds.map(async (userId: string) => {
        // Check if enrollment already exists
        const existingEnrollment = await prisma.enrollment.findFirst({
          where: { userId, courseId }
        });
        if (existingEnrollment) {
          // Fetch with user and course included for consistency
          return prisma.enrollment.findUnique({
            where: { id: existingEnrollment.id },
            include: { user: true, course: true }
          });
        }

        // Create new enrollment
        return prisma.enrollment.create({
          data: {
            userId,
            courseId,
            progress: 0,
            status: 'IN_PROGRESS'
          },
          include: {
            user: true,
            course: true
          }
        });
      })
    );

    res.status(201).json({
      message: 'Course assigned successfully',
      enrollments
    });
  } catch (error) {
    console.error('Error assigning course:', error);
    res.status(500).json({ error: 'Failed to assign course', details: error instanceof Error ? error.message : error });
  }
};

// Progress Tracking
export const getTenantProgress = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { tenantId } = req.params;

    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      include: {
        users: {
          include: {
            enrollments: {
              include: {
                course: true
              }
            }
          }
        }
      }
    });

    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }

    // Calculate statistics
    const stats = {
      totalUsers: tenant.users.length,
      totalEnrollments: 0,
      completedCourses: 0,
      inProgressCourses: 0,
      averageProgress: 0,
      userProgress: tenant.users.map(user => ({
        userId: user.id,
        userName: user.name,
        email: user.email,
        enrollments: user.enrollments.length,
        completedCourses: user.enrollments.filter(e => e.status === 'COMPLETED').length,
        inProgressCourses: user.enrollments.filter(e => e.status === 'IN_PROGRESS').length,
        averageProgress: user.enrollments.reduce((acc, e) => acc + Number(e.progress), 0) / (user.enrollments.length || 1)
      }))
    };

    // Calculate overall statistics
    const allEnrollments = tenant.users.flatMap(u => u.enrollments);
    stats.totalEnrollments = allEnrollments.length;
    stats.completedCourses = allEnrollments.filter(e => e.status === 'COMPLETED').length;
    stats.inProgressCourses = allEnrollments.filter(e => e.status === 'IN_PROGRESS').length;
    stats.averageProgress = allEnrollments.reduce((acc, e) => acc + Number(e.progress), 0) / (allEnrollments.length || 1);

    res.json(stats);
  } catch (error) {
    next(error);
  }
};

export const getTenantCompletionStats = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { tenantId } = req.params;

    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      include: {
        courses: {
          include: {
            course: {
              include: {
                enrollments: {
                  where: {
                    user: {
                      tenantId
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }

    const courseStats = tenant.courses.map(tc => {
      const enrollments = tc.course.enrollments;
      const totalEnrollments = enrollments.length;
      const completedEnrollments = enrollments.filter(e => e.status === 'COMPLETED').length;
      const inProgressEnrollments = enrollments.filter(e => e.status === 'IN_PROGRESS').length;
      const averageProgress = enrollments.reduce((acc, e) => acc + Number(e.progress), 0) / (totalEnrollments || 1);

      return {
        courseId: tc.course.id,
        courseTitle: tc.course.title,
        totalEnrollments,
        completedEnrollments,
        inProgressEnrollments,
        completionRate: (completedEnrollments / (totalEnrollments || 1)) * 100,
        averageProgress
      };
    });

    // Overall statistics
    const stats = {
      totalCourses: tenant.courses.length,
      courseStats,
      overallStats: {
        totalEnrollments: courseStats.reduce((acc, c) => acc + c.totalEnrollments, 0),
        totalCompletions: courseStats.reduce((acc, c) => acc + c.completedEnrollments, 0),
        averageCompletionRate: courseStats.reduce((acc, c) => acc + c.completionRate, 0) / (tenant.courses.length || 1),
        averageProgress: courseStats.reduce((acc, c) => acc + c.averageProgress, 0) / (tenant.courses.length || 1)
      }
    };

    res.json(stats);
  } catch (error) {
    next(error);
  }
};

export const getUserProgress = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        enrollments: {
          include: {
            course: {
              select: {
                id: true,
                title: true,
                description: true,
                slides: true
              }
            }
          }
        }
      }
    });

    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }

    const userProgress = {
      userId: user.id,
      userName: user.name,
      email: user.email,
      totalCourses: user.enrollments.length,
      completedCourses: user.enrollments.filter(e => e.status === 'COMPLETED').length,
      inProgressCourses: user.enrollments.filter(e => e.status === 'IN_PROGRESS').length,
      averageProgress: user.enrollments.reduce((acc, e) => acc + Number(e.progress), 0) / (user.enrollments.length || 1),
      courses: user.enrollments.map(enrollment => ({
        courseId: enrollment.course.id,
        courseTitle: enrollment.course.title,
        description: enrollment.course.description,
        status: enrollment.status,
        progress: enrollment.progress,
        createdAt: new Date().toISOString() 
      }))
    };

    res.json(userProgress);
  } catch (error) {
    next(error);
  }
};

export const getUserCourseContent = async (
  req: Request<{ userId: string; courseId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { userId, courseId } = req.params;

    const enrollment = await prisma.enrollment.findFirst({
      where: {
        userId,
        courseId
      },
      include: {
        course: {
          select: {
            id: true,
            title: true,
            description: true,
            slides: true
          }
        }
      }
    });

    if (!enrollment) {
      res.status(404).json({ error: 'Course enrollment not found' });
      return;
    }

    const courseContent = {
      courseId: enrollment.course.id,
      courseTitle: enrollment.course.title,
      description: enrollment.course.description,
      progress: enrollment.progress,
      status: enrollment.status,
      slides: enrollment.course.slides,
      lastAccessed: new Date().toISOString() 
    };

    res.json(courseContent);
  } catch (error) {
    next(error);
  }
}; 