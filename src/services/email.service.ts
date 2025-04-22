import nodemailer from 'nodemailer';
import { config } from 'dotenv';

config();

// Create a transporter using Gmail
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD
  },
  debug: true,
  logger: true
});

// Verify transporter connection
transporter.verify(function (error, success) {
  if (error) {
    console.log('Email service error:', error);
    console.log('Email configuration:', {
      host: 'smtp.gmail.com',
      port: 587,
      user: process.env.EMAIL_USER,
      passLength: process.env.EMAIL_APP_PASSWORD?.length || 0
    });
  } else {
    console.log('Email server is ready to send messages');
  }
});

interface ContactRequest {
  fullName: string;
  email: string;
  organization: string;
  message: string;
  isConfirmation?: boolean;
}

export const sendContactRequestToAdmin = async (contactRequest: ContactRequest) => {
  console.log('Sending contact request to admin:', contactRequest);
  
  const subject = contactRequest.isConfirmation 
    ? `Organization Confirmation: ${contactRequest.organization}`
    : `New Organization Request: ${contactRequest.organization}`;

  const html = contactRequest.isConfirmation
    ? `
      <h2>Organization Has Confirmed Interest</h2>
      <p><strong>Organization:</strong> ${contactRequest.organization}</p>
      <p><strong>Contact Name:</strong> ${contactRequest.fullName}</p>
      <p><strong>Email:</strong> ${contactRequest.email}</p>
      <p>The organization has confirmed their interest in joining ComplyQuick. Please proceed with creating their account from the SuperAdmin dashboard.</p>
      <p><a href="${process.env.FRONTEND_URL}/superuser/dashboard" style="background-color: #4CAF50; color: white; padding: 14px 20px; text-decoration: none; border-radius: 4px;">Go to Dashboard</a></p>
    `
    : `
      <h2>New Organization Contact Request</h2>
      <p><strong>Organization:</strong> ${contactRequest.organization}</p>
      <p><strong>Contact Name:</strong> ${contactRequest.fullName}</p>
      <p><strong>Email:</strong> ${contactRequest.email}</p>
      <p><strong>Message:</strong> ${contactRequest.message}</p>
    `;

  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: 'shoryaraj763@gmail.com',
    subject,
    html
  };

  console.log('Sending email with options:', mailOptions);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendWelcomeEmailToOrganization = async (
  organizationName: string,
  contactEmail: string
) => {
  console.log('Sending welcome email to organization:', { organizationName, contactEmail });
  
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: contactEmail,
    subject: `Welcome to ComplyQuick - Confirm Your Interest`,
    html: `
      <h2>Hi ${organizationName} Team,</h2>
      <p>Thank you for your interest in ComplyQuick — your all-in-one solution for managing compliance training and certifications efficiently.</p>
      <p>We've received your request and we're thrilled to see your interest in joining our platform!</p>
      <p>Before we proceed, we'd like to confirm if you're ready to get started.</p>
      <p>If you're ready to onboard, please click the button below to confirm:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="mailto:shoryaraj763@gmail.com?subject=Confirm%20ComplyQuick%20Registration&body=We%20confirm%20our%20interest%20in%20joining%20ComplyQuick.%0A%0AOrganization%3A%20${encodeURIComponent(organizationName)}%0AContact%20Email%3A%20${encodeURIComponent(contactEmail)}" 
           style="background-color: #4CAF50; color: white; padding: 14px 20px; text-decoration: none; border-radius: 4px;">
          Confirm Registration
        </a>
      </div>
      <p>If you have any questions or need a demo before proceeding, feel free to reply to this email. We're here to help!</p>
      <p>Looking forward to helping your organization streamline compliance training.</p>
      <p>Warm regards,<br>
      <strong>Shorya</strong><br>
      SuperAdmin – ComplyQuick<br>
      Email: shoryaraj763@gmail.com</p>
    `
  };

  console.log('Sending email with options:', mailOptions);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

export const sendOrganizationCredentials = async (
  organizationName: string,
  adminEmail: string,
  adminPassword: string
) => {
  console.log('Sending credentials to organization:', { organizationName, adminEmail });
  
  const loginLink = `${process.env.FRONTEND_URL}/login`;
  
  const mailOptions = {
    from: process.env.EMAIL_FROM || 'ComplyQuick Support <shoryaraj763@gmail.com>',
    to: adminEmail,
    subject: `Welcome to ComplyQuick - Your Organization Credentials`,
    html: `
      <h2>Hi ${organizationName} Team,</h2>
      <p>Welcome to ComplyQuick!</p>
      <p>Your organization has now been successfully registered on our platform.</p>
      <p>Below are your login credentials for accessing the ComplyQuick Admin Dashboard:</p>
      <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 4px;">
        <p><strong>Admin Email:</strong> ${adminEmail}</p>
        <p><strong>Password:</strong> ${adminPassword}</p>
      </div>
       <p>You can log in using this link: <a href="${loginLink}">${loginLink}</a></p>
      <p>If you have any questions or need help getting started, feel free to reach out. We're here to assist you every step of the way.</p>
      <p>Welcome aboard!</p>
      <p>Best regards,<br>
      <strong>Shorya</strong><br>
      SuperAdmin – ComplyQuick<br>
      Email: shoryaraj763@gmail.com</p>
    `
  };

  console.log('Sending email with options:', mailOptions);

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info);
    return info;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}; 