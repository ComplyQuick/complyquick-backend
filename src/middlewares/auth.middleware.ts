import { Request, Response, NextFunction, RequestHandler } from 'express';
import { UserRole } from '../generated/prisma';
import { PrismaClient } from '../generated/prisma';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

export const checkRole = (allowedRoles: UserRole[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = req.user as any;
    
    if (!user) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  };
};

export const isSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { id: string; role: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.id }
    });

    if (!user || user.role !== 'SUPER_ADMIN') {
      return res.status(403).json({ error: 'Forbidden' });
    }

    next();
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export const isFirstSuperAdmin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const superAdminCount = await prisma.user.count({
      where: { role: 'SUPER_ADMIN' }
    });

    if (superAdminCount === 0) {
      next();
    } else {
      isSuperAdmin(req, res, next);
    }
  } catch (error) {
    res.status(500).json({ error: 'Something broke!' });
  }
};

export const isAdmin = checkRole([UserRole.ADMIN]);
export const isAdminOrSuperAdmin = checkRole([UserRole.ADMIN, UserRole.SUPER_ADMIN]);

export const ensureAuthenticated: RequestHandler = (req, res, next): void => {
  if (!req.user) {
    res.status(401).json({ message: 'Unauthorized - User not authenticated' });
    return;
  }
  next();
}; 