import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export interface TenantDetailsRequest {
  presidingOfficerEmail?: string;
  poshCommitteeEmail?: string;
  hrContactName?: string;
  hrContactEmail?: string;
  hrContactPhone?: string;
  ceoName?: string;
  ceoEmail?: string;
  ceoContact?: string;
  ctoName?: string;
  ctoEmail?: string;
  ctoContact?: string;
  ccoEmail?: string;
  ccoContact?: string;
  croName?: string;
  croEmail?: string;
  croContact?: string;
  legalOfficerName?: string;
  legalOfficerEmail?: string;
  legalOfficerContact?: string;
}

export const addTenantDetails = async (
  req: Request<{ id: string }, any, TenantDetailsRequest>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const details = req.body;

    // Check if tenant exists
    const tenant = await prisma.tenant.findUnique({
      where: { id }
    });

    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }

    // Create or update tenant details
    const tenantDetails = await prisma.tenantDetails.upsert({
      where: { tenantId: id },
      update: details,
      create: {
        ...details,
        tenantId: id
      }
    });

    res.status(200).json(tenantDetails);
  } catch (error) {
    next(error);
  }
};

export const getTenantDetails = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const tenantDetails = await prisma.tenantDetails.findUnique({
      where: { tenantId: id }
    });

    if (!tenantDetails) {
      res.status(404).json({ error: 'Tenant details not found' });
      return;
    }

    res.status(200).json(tenantDetails);
  } catch (error) {
    next(error);
  }
};

export const updateTenantDetails = async (
  req: Request<{ id: string }, any, Partial<TenantDetailsRequest>>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const tenantDetails = await prisma.tenantDetails.update({
      where: { tenantId: id },
      data: updates
    });

    res.status(200).json(tenantDetails);
  } catch (error) {
    next(error);
  }
};

// Get tenant statistics
export const getTenantStats = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const totalTenants = await prisma.tenant.count();
    const totalUsers = await prisma.user.count();
    const totalCourses = await prisma.course.count();
    const totalEnrollments = await prisma.enrollment.count();

    const stats = {
      totalTenants,
      totalUsers,
      totalCourses,
      totalEnrollments,
      averageUsersPerTenant: totalTenants > 0 ? totalUsers / totalTenants : 0,
      averageCoursesPerTenant: totalTenants > 0 ? totalCourses / totalTenants : 0
    };

    res.json(stats);
  } catch (error) {
    next(error);
  }
};

// Get active tenants (tenants with active users or course enrollments in last 30 days)
export const getActiveTenants = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const activeTenants = await prisma.tenant.findMany({
      where: {
        OR: [
          {
            users: {
              some: {
                createdAt: {
                  gte: thirtyDaysAgo
                }
              }
            }
          },
          {
            courses: {
              some: {
                assignedAt: {
                  gte: thirtyDaysAgo
                }
              }
            }
          }
        ]
      },
      include: {
        details: true,
        users: true,
        courses: true
      }
    });

    res.json(activeTenants);
  } catch (error) {
    next(error);
  }
};

// Get inactive tenants (tenants without active users or course enrollments in last 30 days)
export const getInactiveTenants = async (
  _req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const inactiveTenants = await prisma.tenant.findMany({
      where: {
        AND: [
          {
            users: {
              none: {
                createdAt: {
                  gte: thirtyDaysAgo
                }
              }
            }
          },
          {
            courses: {
              none: {
                assignedAt: {
                  gte: thirtyDaysAgo
                }
              }
            }
          }
        ]
      },
      include: {
        details: true,
        users: true,
        courses: true
      }
    });

    res.json(inactiveTenants);
  } catch (error) {
    next(error);
  }
}; 