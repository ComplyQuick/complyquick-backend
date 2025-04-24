import { Router, RequestHandler } from 'express';
import { login, registerAdmin } from '../controllers/auth.controller';
import { isFirstSuperAdmin } from '../middlewares/auth.middleware';
import { LoginRequest, RegisterRequest } from '../controllers/auth.controller';
import passport from '../config/passport';
import jwt from 'jsonwebtoken';

const router = Router();

// Public routes
const loginHandler: RequestHandler = async (req, res, next) => {
  await login(req, res, next);
};
router.post('/login', loginHandler);

// Google OAuth routes
router.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get('/google/callback',
  passport.authenticate('google', { session: false }),
  (req, res) => {
    const user = req.user as any;
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
    res.redirect(`${process.env.FRONTEND_URL}/dashboard?token=${token}&tenantId=${user.tenantId}`);
  }
);

// Protected routes - Only accessible by SuperAdmin or first registration
const registerAdminHandler: RequestHandler = async (req, res, next) => {
  await registerAdmin(req, res, next);
};
router.post('/register-admin', isFirstSuperAdmin as RequestHandler, registerAdminHandler);

export default router;