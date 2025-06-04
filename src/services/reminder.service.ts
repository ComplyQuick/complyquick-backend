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
    subject: `Start Your Course: ${enrollment.course.title}`,
    html: `
      <h2>Hi ${enrollment.user.name},</h2>
      <p>We noticed you haven't started your course "${enrollment.course.title}" yet.</p>
      <p>Get started now to stay on track with your compliance training!</p>
      <p>Click here to begin: <a href="${process.env.FRONTEND_URL}/courses/${enrollment.courseId}">Start Course</a></p>
      <p>Best regards,<br>ComplyQuick Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const sendProgressReminder = async (enrollment: UserEnrollment) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: enrollment.user.email,
    subject: `Continue Your Progress: ${enrollment.course.title}`,
    html: `
      <h2>Hi ${enrollment.user.name},</h2>
      <p>You're making good progress on "${enrollment.course.title}" (${enrollment.progress}% complete).</p>
      <p>Keep going! Click here to continue: <a href="${process.env.FRONTEND_URL}/courses/${enrollment.courseId}">Continue Course</a></p>
      <p>Best regards,<br>ComplyQuick Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const sendNearCompletionReminder = async (enrollment: UserEnrollment) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: enrollment.user.email,
    subject: `Almost There: ${enrollment.course.title}`,
    html: `
      <h2>Hi ${enrollment.user.name},</h2>
      <p>You're so close to completing "${enrollment.course.title}" (${enrollment.progress}% complete)!</p>
      <p>Finish strong! Click here to complete: <a href="${process.env.FRONTEND_URL}/courses/${enrollment.courseId}">Complete Course</a></p>
      <p>Best regards,<br>ComplyQuick Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const sendMCQReminder = async (enrollment: UserEnrollment) => {
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: enrollment.user.email,
    subject: `Complete Your MCQ: ${enrollment.course.title}`,
    html: `
      <h2>Hi ${enrollment.user.name},</h2>
      <p>You've completed the course content for "${enrollment.course.title}"!</p>
      <p>Don't forget to take the MCQ to receive your certificate.</p>
      <p>Click here to take the MCQ: <a href="${process.env.FRONTEND_URL}/courses/${enrollment.courseId}/mcq">Take MCQ</a></p>
      <p>Best regards,<br>ComplyQuick Team</p>
    `
  };

  await transporter.sendMail(mailOptions);
};

export const checkAndSendReminders = async () => {
  try {
    // Get all enrollments with progress less than 100%
    const enrollments = await prisma.enrollment.findMany({
      where: {
        status: {
          in: ['NOT_STARTED', 'IN_PROGRESS']
        }
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

    // Check for completed courses without MCQ
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

      if (!mcqAnswers) {
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
  }
}; 