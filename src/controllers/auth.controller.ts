import { Request, Response, NextFunction } from 'express';
import { PrismaClient, UserRole } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma';

const prismaClient = new PrismaClient();

export interface LoginRequest {
  email: string;
  password: string;
  domain?: string;
}

export interface RegisterRequest {
  email: string;
  name: string;
  password: string;
  role: UserRole;
  domain?: string;
  organizationName?: string;
}

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, domain, password } = req.body;

    // Validate required fields
    if (!email || !domain || !password) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Find tenant by domain
    const tenant = await prisma.tenant.findUnique({
      where: { domain }
    });

    if (!tenant) {
      return res.status(404).json({ error: 'Organization not found' });
    }

    // Verify password
    const isPasswordValid = await bcrypt.compare(password, tenant.adminPassword);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        tenantId: tenant.id,
        email: tenant.adminEmail,
        role: 'ADMIN'
      },
      process.env.JWT_SECRET || 'your-secret-key',
      { expiresIn: '24h' }
    );

    res.json({
      token,
      user: {
        id: tenant.id,
        email: tenant.adminEmail,
        name: tenant.name,
        role: 'ADMIN'
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    next(error);
  }
};

export const registerAdmin = async (
  req: Request<{}, any, RegisterRequest>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, name, password, domain, role, organizationName } = req.body;

    // Validate role
    if (role !== UserRole.ADMIN && role !== UserRole.SUPER_ADMIN) {
      res.status(400).json({ error: 'Invalid role' });
      return;
    }

    // Check if user already exists
    const existingUser = await prismaClient.user.findUnique({ where: { email } });
    if (existingUser) {
      res.status(400).json({ error: 'User already exists' });
      return;
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // For tenant admin, find existing tenant
    let tenantId: string | undefined;
    if (role === UserRole.ADMIN) {
      if (!domain) {
        res.status(400).json({ error: 'Domain required for tenant admin' });
        return;
      }

      const existingTenant = await prismaClient.tenant.findUnique({
        where: { domain }
      });

      if (!existingTenant) {
        res.status(400).json({ error: 'Tenant not found with this domain' });
        return;
      }

      tenantId = existingTenant.id;
    }

    const user = await prismaClient.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role,
        tenantId
      },
      include: {
        tenant: true
      }
    });

    res.status(201).json({
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
        tenant: user.tenant
      }
    });
  } catch (error) {
    next(error);
  }
}; 