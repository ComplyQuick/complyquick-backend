import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { PrismaClient, UserRole } from '../generated/prisma';

const prisma = new PrismaClient();

// Google OAuth Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true
    },
    async (request, accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails?.[0].value;
        if (!email) {
          return done(new Error('No email found in Google profile'));
        }

        // Extract domain from email
        const domain = email.split('@')[1];

        // Check if domain exists in any tenant
        const tenant = await prisma.tenant.findUnique({
          where: { domain }
        });

        if (!tenant) {
          return done(new Error('Your email domain is not registered with any organization'));
        }

        // Check if user exists
        let user = await prisma.user.findUnique({
          where: { email },
          include: { tenant: true }
        });

        if (!user) {
          // Create new user if doesn't exist
          user = await prisma.user.create({
            data: {
              email,
              name: profile.displayName || email.split('@')[0],
              role: UserRole.USER,
              tenantId: tenant.id // Associate with the found tenant
            },
            include: { tenant: true }
          });
        } else if (!user.tenantId) {
          // Update user with tenant if not already associated
          user = await prisma.user.update({
            where: { email },
            data: { tenantId: tenant.id },
            include: { tenant: true }
          });
        }

        // Update user profile if needed
        if (profile.displayName && user.name !== profile.displayName) {
          user = await prisma.user.update({
            where: { email },
            data: { name: profile.displayName },
            include: { tenant: true }
          });
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

// JWT Strategy for Admin/SuperAdmin
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET || 'fallback-secret-key',
    },
    async (payload: { id: string; role: string }, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { id: payload.id },
          include: { tenant: true }
        });

        if (!user) {
          return done(null, false);
        }

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export default passport; 