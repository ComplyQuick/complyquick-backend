import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from '../controllers/course.controller';
import { UserRole } from '../generated/prisma';

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'No token provided' });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key') as { id: string; email: string; role: UserRole };
    (req as AuthenticatedRequest).user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid token' });
    return;
  }
}; 