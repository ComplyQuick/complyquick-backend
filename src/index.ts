import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from './generated/prisma';
import authRoutes from './routes/auth.routes';
import tenantRoutes from './routes/tenant.routes';
import courseRoutes from './routes/course.routes';
import tenantAdminRoutes from './routes/tenant-admin.routes';
import adminDashboardRoutes from './routes/admin-dashboard.routes';
import passport from './config/passport';
import session from 'express-session';
import userDashboardRoutes from './routes/user-dashboard.routes';
import contactRoutes from './routes/contact.routes';
import superadminRoutes from './routes/superadmin.routes';
import cron from 'node-cron';
import { checkAndSendReminders } from './services/reminder.service';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Initialize Prisma client
export const prisma = new PrismaClient();

app.use(express.json());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:7000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tenants', tenantRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/tenant-admin', tenantAdminRoutes);
app.use('/api/user-dashboard', userDashboardRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/admin/dashboard', adminDashboardRoutes);
app.use('/api/superadmin', superadminRoutes);

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Set up cron job to run at 8:00 AM
cron.schedule('0 8 * * *', async () => {
  console.log('Running reminder check (at 8:00 AM)...');
  try {
    await checkAndSendReminders();
    console.log('Reminder check completed successfully');
  } catch (error) {
    console.error('Error in reminder cron job:', error);
  }
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 