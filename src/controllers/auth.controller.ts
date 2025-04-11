import { Request, Response, NextFunction } from 'express';
import { PrismaClient, UserRole } from '../generated/prisma';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

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
  req: Request<{}, any, LoginRequest>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email, password, domain } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      include: { tenant: true }
    });

    if (!user) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    // For tenant admin, verify domain
    if (user.role === UserRole.ADMIN && (!domain || user.tenant?.domain !== domain)) {
      res.status(401).json({ error: 'Invalid domain' });
      return;
    }

    if (!user.password) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      res.status(401).json({ error: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET!,
      { expiresIn: '24h' }
    );

    res.status(200).json({
      token,
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
    const existingUser = await prisma.user.findUnique({ where: { email } });
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

      const existingTenant = await prisma.tenant.findUnique({
        where: { domain }
      });

      if (!existingTenant) {
        res.status(400).json({ error: 'Tenant not found with this domain' });
        return;
      }

      tenantId = existingTenant.id;
    }

    const user = await prisma.user.create({
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