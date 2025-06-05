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
  getUserCourseContent,
  toggleCourseStatus,
  getEnabledCourses,
  getDisabledCourses,
  getUserEnabledCourses,
  updateCourseProperties
} from '../controllers/tenant-admin.controller';
import asyncHandler from 'express-async-handler';
import { PrismaClient } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import { authenticateToken } from '../middleware/auth.middleware';


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
router.post('/courses/assign', asyncHandler(assignCourseToUsers));

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

// Enable/Disable course (protected route)
router.patch(
  '/tenants/:tenantId/courses/:courseId/toggle',
  authenticateToken,
  asyncHandler(toggleCourseStatus as any)
);

// Get enabled courses (public route)
router.get('/tenants/:tenantId/courses/enabled', asyncHandler(getEnabledCourses));

// Get disabled courses (public route)
router.get('/tenants/:tenantId/courses/disabled', asyncHandler(getDisabledCourses));

// Get enabled courses for user
router.get('/user/enabled-courses', asyncHandler(getUserEnabledCourses as any));

// Update course properties and POC details
router.patch('/courses/properties', asyncHandler(updateCourseProperties));

export default router; 