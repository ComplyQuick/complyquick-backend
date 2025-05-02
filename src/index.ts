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

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Initialize Prisma client
export const prisma = new PrismaClient();

app.use(express.json());

// CORS configuration
app.use(cors({
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // List of allowed origins
    const allowedOrigins = [
      'http://localhost:3000', // Your local frontend
      'http://localhost:7000', // Another local frontend port if needed
      process.env.FRONTEND_URL, // Your production frontend URL
      'hhttps://4c0a-106-79-207-126.ngrok-free.app', // Your specific ngrok URL
      'https://a05f-2409-40f2-2057-4cb7-dd02-9b16-d95d-6c1.ngrok-free.app',
      'https://*.ngrok.io', // Allow all ngrok subdomains
      'https://*.ngrok-free.app' // Allow all ngrok-free subdomains
    ];
    
    // Log the incoming origin for debugging
    console.log('Incoming request from origin:', origin);
    
    // Check if the origin matches any of the allowed patterns
    const isAllowed = allowedOrigins.some(allowedOrigin => {
      if (!allowedOrigin) return false;
      
      // If the allowed origin contains a wildcard
      if (allowedOrigin.includes('*')) {
        const pattern = new RegExp('^' + allowedOrigin.replace('*', '.*') + '$');
        return pattern.test(origin);
      }
      
      // Exact match
      return origin === allowedOrigin;
    });
    
    if (isAllowed) {
      console.log('Origin allowed:', origin);
      callback(null, true);
    } else {
      console.log('Origin not allowed:', origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
  exposedHeaders: ['Content-Type', 'Authorization']
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

// Basic health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 