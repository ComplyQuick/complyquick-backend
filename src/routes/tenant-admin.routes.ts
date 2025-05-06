import { Router, Request, Response, NextFunction } from 'express';
import {
  getTenantUsers,
  addUserToTenant,
  removeUserFromTenant,
  getTenantCourses,
  assignCourseToUsers,
  getTenantProgress,
  getTenantCompletionStats,
  getUserProgress,
  getUserCourseContent
} from '../controllers/tenant-admin.controller';
import asyncHandler from 'express-async-handler';
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';

const router = Router();
const prisma = new PrismaClient();

// Get users by tenant ID
router.get('/tenants/:tenantId/users', asyncHandler(async (req: Request<{ tenantId: string }>, res: Response, next: NextFunction): Promise<void> => {
  const { tenantId } = req.params;
  const users = await prisma.user.findMany({
    where: { tenantId },
    include: {
      enrollments: {
        include: {
          course: true
        }
      }
    }
  });
  res.json(users);
}));

// Get courses by tenant ID
router.get('/tenants/:tenantId/courses', asyncHandler(async (req: Request<{ tenantId: string }>, res: Response, next: NextFunction): Promise<void> => {
  const { tenantId } = req.params;
  const tenant = await prisma.tenant.findUnique({
    where: { id: tenantId },
    include: {
      courses: {
        include: {
          course: {
            include: {
              enrollments: {
                where: { user: { tenantId } }
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

  const courses = tenant.courses.map(tc => ({
    ...tc.course,
    enrolledUsers: tc.course.enrollments.length,
    skippable: tc.skippable,
    mandatory: tc.mandatory,
    retryType: tc.retryType
  }));

  res.json(courses);
}));

// Add user to specific tenant
router.post('/tenants/:tenantId/users', asyncHandler(async (req: Request<{ tenantId: string }>, res: Response, next: NextFunction): Promise<void> => {
  const { tenantId } = req.params;
  const { email, name, password } = req.body;

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    res.status(400).json({ error: 'User already exists' });
    return;
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create new user
  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
      role: 'USER',
      tenantId
    },
    include: {
      enrollments: {
        include: {
          course: true
        }
      }
    }
  });

  res.status(201).json(user);
}));

// Assign course to users
router.post('/courses/assign', asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { courseId, userIds } = req.body;

  try {
    // Verify course exists
    const course = await prisma.course.findUnique({
      where: { id: courseId }
    });

    if (!course) {
      res.status(404).json({ error: 'Course not found' });
      return;
    }

    // Create enrollments for each user
    const enrollments = await Promise.all(
      userIds.map(async (userId: string) => {
        // Check if enrollment already exists
        const existingEnrollment = await prisma.enrollment.findFirst({
          where: {
            userId,
            courseId
          }
        });

        if (existingEnrollment) {
          return existingEnrollment;
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
    res.status(500).json({ error: 'Failed to assign course' });
  }
}));

// Get tenant progress statistics
router.get('/tenants/:tenantId/progress', asyncHandler(async (req: Request<{ tenantId: string }>, res: Response, next: NextFunction): Promise<void> => {
  await getTenantProgress(req, res, next);
}));

// Get tenant completion statistics
router.get('/tenants/:tenantId/completion-stats', asyncHandler(async (req: Request<{ tenantId: string }>, res: Response, next: NextFunction): Promise<void> => {
  await getTenantCompletionStats(req, res, next);
}));

// User Progress Routes
router.get('/users/:userId/courses', asyncHandler(async (req: Request<{ userId: string }>, res: Response, next: NextFunction): Promise<void> => {
  await getUserProgress(req, res, next);
}));

router.get('/users/:userId/courses/:courseId', asyncHandler(async (req: Request<{ userId: string; courseId: string }>, res: Response, next: NextFunction): Promise<void> => {
  await getUserCourseContent(req, res, next);
}));

// Delete user from tenant
router.delete('/tenants/:id/users/:userId', asyncHandler(async (req: Request<{ id: string; userId: string }>, res: Response, next: NextFunction): Promise<void> => {
  await removeUserFromTenant(req, res, next);
}));

// Get tenant courses
router.get('/tenants/:id/courses', asyncHandler(async (req: Request<{ id: string }>, res: Response, next: NextFunction): Promise<void> => {
  await getTenantCourses(req, res, next);
}));

export default router; 