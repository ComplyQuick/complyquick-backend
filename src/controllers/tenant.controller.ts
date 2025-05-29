import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import { prisma } from '../lib/prisma';
import { UserRole } from '../generated/prisma';
import { sendOrganizationCredentials } from '../services/email.service';

export interface CreateTenantRequest {
  name: string;
  domain: string;
  adminEmail: string;
  adminPassword: string;
}

export interface TenantDetailsRequest {
  hrContactName?: string;
  hrContactEmail?: string;
  hrContactPhone?: string;
  ceoName?: string;
  ceoEmail?: string;
  ceoContact?: string;
  ctoName?: string;
  ctoEmail?: string;
  ctoContact?: string;
}

// Create a new tenant (organization) - SuperAdmin only
export const createTenant = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, domain, adminEmail, adminPassword } = req.body;

    // Validate required fields
    if (!name || !domain || !adminEmail || !adminPassword) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    // Check if tenant with same domain already exists
    const existingTenant = await prisma.tenant.findUnique({
      where: { domain }
    });

    if (existingTenant) {
      res.status(400).json({ error: 'A tenant with this domain already exists' });
      return;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Create tenant
    const tenant = await prisma.tenant.create({
      data: {
        name,
        domain,
        adminEmail,
        adminPassword: hashedPassword
      }
    });

    // Send credentials email
    await sendOrganizationCredentials(
      name,
      adminEmail,
      adminPassword
    );

    res.status(201).json({
      message: 'Organization created successfully',
      tenant
    });
  } catch (error) {
    console.error('Error creating tenant:', error);
    next(error);
  }
};

// Add tenant details - Tenant Admin only
export const addTenantDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const detailsData = req.body as TenantDetailsRequest;

    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: { details: true }
    });

    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }

    if (tenant.details) {
      // Update existing details
      const updatedDetails = await prisma.tenantDetails.update({
        where: { tenantId: id },
        data: detailsData
      });
      res.json(updatedDetails);
    } else {
      // Create new details
      const newDetails = await prisma.tenantDetails.create({
        data: {
          ...detailsData,
          tenantId: id
        }
      });
      res.json(newDetails);
    }
  } catch (error) {
    next(error);
  }
};

export const getTenantDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: { details: true }
    });
    
    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }
    
    if (!tenant.details) {
      res.status(404).json({ error: 'Tenant details not found' });
      return;
    }
    
    res.json(tenant.details);
  } catch (error) {
    next(error);
  }
};

export const updateTenantDetails = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const detailsData = req.body as TenantDetailsRequest;
    
    const updatedDetails = await prisma.tenantDetails.update({
      where: { tenantId: id },
      data: detailsData
    });
    
    res.json(updatedDetails);
  } catch (error) {
    next(error);
  }
};

export const getAllTenants = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const tenants = await prisma.tenant.findMany({
      include: {
        details: true,
        users: true
      }
    });
    res.json(tenants);
  } catch (error) {
    next(error);
  }
};

export const getTenantById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: {
        details: true,
        users: true,
        courses: true
      }
    });
    
    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }
    
    res.json(tenant);
  } catch (error) {
    next(error);
  }
};

export const getTenantStats = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: {
        users: true,
        courses: true,
        details: true
      }
    });
    
    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }
    
    const stats = {
      totalUsers: tenant.users.length,
      totalCourses: tenant.courses.length,
      hasDetails: tenant.details !== null
    };
    
    res.json(stats);
  } catch (error) {
    next(error);
  }
};

export const getActiveTenants = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const tenants = await prisma.tenant.findMany({
      where: {
        details: {
          isNot: null
        }
      },
      include: {
        details: true
      }
    });
    res.json(tenants);
  } catch (error) {
    next(error);
  }
};

export const getInactiveTenants = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const tenants = await prisma.tenant.findMany({
      where: {
        details: null
      },
      include: {
        details: true
      }
    });
    res.json(tenants);
  } catch (error) {
    next(error);
  }
};

export const addTenantDetailsHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const tenantDetails = req.body as TenantDetailsRequest;

  try {
    const tenant = await prisma.tenant.findUnique({
      where: { id },
    });

    if (!tenant) {
      return res.status(404).json({ error: 'Tenant not found' });
    }

    // Create tenant details
    const details = await prisma.tenantDetails.create({
      data: {
        tenantId: id,
        ...tenantDetails
      },
    });

    return res.status(201).json(details);
  } catch (error) {
    console.error('Error adding tenant details:', error);
    return res.status(500).json({ error: 'Failed to add tenant details' });
  }
};

export const getTenantDetailsHandler = async (
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

export const updateTenantDetailsHandler = async (
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
export const getTenantStatsHandler = async (
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
export const getActiveTenantsHandler = async (
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
export const getInactiveTenantsHandler = async (
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