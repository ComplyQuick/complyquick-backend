import { PrismaClient, EnrollmentStatus } from '../generated/prisma';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

const prisma = new PrismaClient();

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  }
});

interface UserEnrollment {
  userId: string;
  courseId: string;
  progress: number;
  status: EnrollmentStatus;
  user: {
    email: string;
    name: string;
  };
  course: {
    title: string;
  };
  lastReminderSent: Date | null;
}

export const sendStartCourseReminder = async (enrollment: UserEnrollment) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: enrollment.user.email,
    subject: `Action Required: Start Your Course - ${enrollment.course.title}`,
    html: `
      <h2>Hello ${enrollment.user.name},</h2>
      <p>We noticed you haven't started your course "${enrollment.course.title}" yet.</p>
      <p>To get started:</p>
      <ol>
        <li>Log in to your ComplyQuick account</li>
        <li>Navigate to the "My Courses" section</li>
        <li>Find "${enrollment.course.title}" in your course list</li>
        <li>Click on the course to begin your learning journey</li>
      </ol>
      <p>Remember, completing this course is important for your professional development and compliance requirements.</p>
      <p>If you need any assistance, please contact your organization's administrator.</p>
      <p>Best regards,<br>ComplyQuick Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const sendProgressReminder = async (enrollment: UserEnrollment) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: enrollment.user.email,
    subject: `Continue Your Progress - ${enrollment.course.title}`,
    html: `
      <h2>Hello ${enrollment.user.name},</h2>
      <p>We noticed you're making progress in "${enrollment.course.title}" (${enrollment.progress}% complete), but haven't continued recently.</p>
      <p>To continue your course:</p>
      <ol>
        <li>Log in to your ComplyQuick account</li>
        <li>Go to "My Courses"</li>
        <li>Select "${enrollment.course.title}"</li>
        <li>Resume from where you left off</li>
      </ol>
      <p>Keep up the good work! Regular progress helps ensure you complete the course on time.</p>
      <p>If you're experiencing any issues, please reach out to your organization's administrator.</p>
      <p>Best regards,<br>ComplyQuick Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const sendNearCompletionReminder = async (enrollment: UserEnrollment) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: enrollment.user.email,
    subject: `Almost There! Complete Your Course - ${enrollment.course.title}`,
    html: `
      <h2>Hello ${enrollment.user.name},</h2>
      <p>Great progress! You're ${enrollment.progress}% through "${enrollment.course.title}".</p>
      <p>To complete the course:</p>
      <ol>
        <li>Log in to your ComplyQuick account</li>
        <li>Access "My Courses"</li>
        <li>Open "${enrollment.course.title}"</li>
        <li>Complete the remaining modules</li>
        <li>Take the final assessment</li>
      </ol>
      <p>You're so close to earning your certificate! Don't let your progress go to waste.</p>
      <p>Need help? Contact your organization's administrator for support.</p>
      <p>Best regards,<br>ComplyQuick Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const sendMCQReminder = async (enrollment: UserEnrollment) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: enrollment.user.email,
    subject: `Complete Your Assessment - ${enrollment.course.title}`,
    html: `
      <h2>Hello ${enrollment.user.name},</h2>
      <p>You've completed the course content for "${enrollment.course.title}", but haven't taken the final assessment yet.</p>
      <p>To complete your course:</p>
      <ol>
        <li>Log in to your ComplyQuick account</li>
        <li>Go to "My Courses"</li>
        <li>Select "${enrollment.course.title}"</li>
        <li>Navigate to the assessment section</li>
        <li>Complete the multiple-choice questions</li>
      </ol>
      <p>Remember: You need to pass the assessment to receive your course completion certificate.</p>
      <p>If you need any assistance, please contact your organization's administrator.</p>
      <p>Best regards,<br>ComplyQuick Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const checkAndSendReminders = async () => {
  try {
    // Get all enrollments with user and course details
    const enrollments = await prisma.enrollment.findMany({
      include: {
        user: {
          select: {
            email: true,
            name: true
          }
        },
        course: {
          select: {
            title: true
          }
        }
      }
    });

    // Get all completed enrollments
    const completedEnrollments = await prisma.enrollment.findMany({
      where: {
        status: 'COMPLETED',
        progress: 100
      },
      include: {
        user: {
          select: {
            email: true,
            name: true
          }
        },
        course: {
          select: {
            title: true
          }
        }
      }
    });

    // Process regular enrollments
    for (const enrollment of enrollments) {
      const enrollmentData: UserEnrollment = {
        ...enrollment,
        progress: Number(enrollment.progress)
      };

      // Check if we've sent a reminder in the last 3 days
      const lastReminderSent = enrollmentData.lastReminderSent;
      if (lastReminderSent) {
        const daysSinceLastReminder = Math.floor(
          (new Date().getTime() - new Date(lastReminderSent).getTime()) / (1000 * 60 * 60 * 24)
        );
        if (daysSinceLastReminder < 3) {
          continue;
        }
      }

      // Case 1: Progress is 0%
      if (enrollmentData.progress === 0) {
        await sendStartCourseReminder(enrollmentData);
      }
      // Case 2: Progress is between 1-70%
      else if (enrollmentData.progress > 0 && enrollmentData.progress < 70) {
        await sendProgressReminder(enrollmentData);
      }
      // Case 3: Progress is between 70-100%
      else if (enrollmentData.progress >= 70 && enrollmentData.progress < 100) {
        await sendNearCompletionReminder(enrollmentData);
      }

      // Update the last reminder sent date
      await prisma.enrollment.update({
        where: { id: enrollment.id },
        data: { lastReminderSent: new Date() }
      });
    }

    // Process completed enrollments
    for (const enrollment of completedEnrollments) {
      const enrollmentData: UserEnrollment = {
        ...enrollment,
        progress: Number(enrollment.progress)
      };

      // Check if we've sent a reminder in the last 3 days
      const lastReminderSent = enrollmentData.lastReminderSent;
      if (lastReminderSent) {
        const daysSinceLastReminder = Math.floor(
          (new Date().getTime() - new Date(lastReminderSent).getTime()) / (1000 * 60 * 60 * 24)
        );
        if (daysSinceLastReminder < 3) {
          continue;
        }
      }

      // Check if user has completed MCQs
      const mcqAnswers = await prisma.userMCQAnswer.findFirst({
        where: {
          userId: enrollmentData.userId,
          mcq: {
            courseId: enrollmentData.courseId
          }
        }
      });

      // Check if user has a certificate
      const certificate = await prisma.certificate.findFirst({
        where: {
          userId: enrollmentData.userId,
          courseId: enrollmentData.courseId
        }
      });

      // Only send MCQ reminder if no MCQ answers and no certificate
      if (!mcqAnswers && !certificate) {
        await sendMCQReminder(enrollmentData);
        // Update the last reminder sent date
        await prisma.enrollment.update({
          where: { id: enrollment.id },
          data: { lastReminderSent: new Date() }
        });
      }
    }
  } catch (error) {
    console.error('Error in checkAndSendReminders:', error);
    throw error;
  }
}; 