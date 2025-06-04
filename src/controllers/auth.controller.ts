import { Request, Response, NextFunction } from 'express';
import { PrismaClient, UserRole } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma';
import asyncHandler from 'express-async-handler';

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

export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { email, password, domain } = req.body;

  // First check if it's a tenant admin
  const tenant = await prisma.tenant.findFirst({
    where: { 
      adminEmail: email,
      domain: domain
    }
  });

  if (tenant) {
    const isPasswordValid = await bcrypt.compare(password, tenant.adminPassword);
    if (isPasswordValid) {
      const token = jwt.sign(
        { 
          id: tenant.id, 
          role: 'ADMIN',
          tenantId: tenant.id,
          email: tenant.adminEmail
        },
        process.env.JWT_SECRET!,
        { expiresIn: '24h' }
      );
      res.json({ token });
      return;
    }
  }

  // If not a tenant admin, check regular users
  const user = await prisma.user.findUnique({
    where: { email },
    include: { tenant: true }
  });

  if (!user) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  if (!user.password) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    res.status(401).json({ message: 'Invalid credentials' });
    return;
  }

  const token = jwt.sign(
    { 
      id: user.id, 
      role: user.role,
      tenantId: user.tenantId,
      email: user.email
    },
    process.env.JWT_SECRET!,
    { expiresIn: '24h' }
  );

  res.json({ token });
});

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
