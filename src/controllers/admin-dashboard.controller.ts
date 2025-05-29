import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// Get overall training statistics
export const getTrainingStatistics = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Get tenantId from query params
    const { tenantId } = req.query;
    if (!tenantId || typeof tenantId !== 'string') {
      res.status(400).json({ error: 'tenantId is required as a query parameter' });
      return;
    }

    // Get all users with role USER for this tenant
    const users = await prisma.user.findMany({
      where: {
        tenantId,
        role: 'USER'
      },
      include: {
        enrollments: {
          include: {
            course: true
          }
        }
      }
    });

    // Calculate total users (only USER role)
    const totalUsers = users.length;

    // Get all unique courseIds assigned to this tenant
    const tenantCourses = await prisma.tenantCourse.findMany({
      where: { tenantId },
      select: { courseId: true }
    });
    const uniqueCourseIds = Array.from(new Set(tenantCourses.map(tc => tc.courseId)));
    const totalCourses = uniqueCourseIds.length;

    // Initialize counters for training status
    let completedCount = 0;
    let inProgressCount = 0;
    let notStartedCount = 0;

    // Calculate user completion statuses
    users.forEach(user => {
      if (user.enrollments.length === 0) {
        notStartedCount++;

      } else {
        const allCompleted = user.enrollments.every(e => e.status === 'COMPLETED');
        const anyInProgress = user.enrollments.some(e => e.status === 'IN_PROGRESS');
        if (allCompleted) {
          completedCount++;
        } else if (anyInProgress) {
          inProgressCount++;
        } else {
          notStartedCount++;
        }
      }
    });

    // Calculate overall completion rate
    const allEnrollments = users.flatMap(u => u.enrollments);
    const totalEnrollments = allEnrollments.length;
    const completedEnrollments = allEnrollments.filter(e => e.status === 'COMPLETED').length;
    const completionRate = totalEnrollments > 0 
      ? Math.round((completedEnrollments / totalEnrollments) * 100) 
      : 0;

    res.json({
      totalUsers,
      totalCourses,
      completionRate: `${completionRate}%`,
      trainingStatus: {
        completed: completedCount,
        inProgress: inProgressCount,
        notStarted: notStartedCount
      }
    });
  } catch (error) {
    next(error);
  }
};

// Get recent user activity
export const getRecentUserActivity = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    // Get tenantId from query params
    const { tenantId } = req.query;
    if (!tenantId || typeof tenantId !== 'string') {
      res.status(400).json({ error: 'tenantId is required as a query parameter' });
      return;
    }

    // Only fetch users for this tenant, and only regular users
    const users = await prisma.user.findMany({
      where: { tenantId, role: 'USER' },
      include: {
        enrollments: {
          include: {
            course: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 10 // Limit to 10 most recent users
    });

    const userActivity = users.map(user => {
      // Calculate user's status
      let status = 'Not Started';
      if (user.enrollments.length > 0) {
        const allCompleted = user.enrollments.every(e => e.status === 'COMPLETED');
        const anyInProgress = user.enrollments.some(e => e.status === 'IN_PROGRESS');
        if (allCompleted) {
          status = 'Completed';
        } else if (anyInProgress) {
          status = 'In Progress';
        }
      }

      return {
        name: user.name,
        email: user.email,
        totalCourses: user.enrollments.length,
        status
      };
    });

    res.json(userActivity);
  } catch (error) {
    next(error);
  }
};

// Get detailed user completion status
export const getUserCompletionStatus = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await prisma.user.findMany({
      include: {
        enrollments: {
          include: {
            course: true
          }
        }
      }
    });

    const userCompletionStatus = users.map(user => {
      const totalAssignedCourses = user.enrollments.length;
      const completedCourses = user.enrollments.filter(e => e.status === 'COMPLETED').length;
      const inProgressCourses = user.enrollments.filter(e => e.status === 'IN_PROGRESS').length;
      const averageProgress = user.enrollments.reduce((acc, e) => acc + Number(e.progress), 0) / (user.enrollments.length || 1);

      let status = 'Not Started';
      if (totalAssignedCourses > 0) {
        if (completedCourses === totalAssignedCourses) {
          status = 'Completed';
        } else if (inProgressCourses > 0) {
          status = 'In Progress';
        }
      }

      return {
        name: user.name,
        email: user.email,
        totalAssignedCourses,
        completedCourses,
        inProgressCourses,
        averageProgress,
        status
      };
    });

    res.json(userCompletionStatus);
  } catch (error) {
    next(error);
  }
}; 