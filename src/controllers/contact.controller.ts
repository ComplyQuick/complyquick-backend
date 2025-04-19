import { Request, Response, NextFunction } from 'express';
import { sendContactRequestToAdmin, sendWelcomeEmailToOrganization } from '../services/email.service';
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

interface OrganizationInterest {
  organizationName: string;
  email: string;
  status: 'PENDING' | 'CONFIRMED' | 'REGISTERED';
  createdAt: Date;
  updatedAt: Date;
}

export const submitContactRequest = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log('Received contact request:', req.body);
    const { fullName, email, organization, message } = req.body;

    // Validate required fields
    if (!fullName || !email || !organization || !message) {
      console.log('Missing required fields:', { fullName, email, organization, message });
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    try {
      // Send email to admin
      console.log('Sending initial contact request to admin');
      await sendContactRequestToAdmin({
        fullName,
        email,
        organization,
        message
      });

      // Send welcome email to organization
      console.log('Sending welcome email to organization');
      await sendWelcomeEmailToOrganization(
        organization,
        email
      );

      console.log('Contact request processed successfully');
      res.status(200).json({
        message: 'Contact request submitted successfully'
      });
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      res.status(500).json({
        error: 'Failed to send emails',
        details: emailError instanceof Error ? emailError.message : 'Unknown error'
      });
    }
  } catch (error) {
    console.error('Error in submitContactRequest:', error);
    next(error);
  }
};

export const confirmOrganizationInterest = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    console.log('Received confirmation request:', req.params, req.query);
    const { organizationName } = req.params;
    const { email } = req.query;

    if (!email || !organizationName) {
      console.log('Missing required parameters:', { email, organizationName });
      res.status(400).json({ error: 'Email and organization name are required' });
      return;
    }

    try {
      // Send confirmation notification to admin
      console.log('Sending confirmation notification to admin');
      await sendContactRequestToAdmin({
        fullName: organizationName,
        email: email as string,
        organization: organizationName,
        message: 'Organization has confirmed interest in joining ComplyQuick.',
        isConfirmation: true
      });

      console.log('Confirmation processed successfully');
      res.status(200).json({
        message: 'Interest confirmed successfully',
        organizationName,
        email
      });
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError);
      res.status(500).json({
        error: 'Failed to send confirmation email',
        details: emailError instanceof Error ? emailError.message : 'Unknown error'
      });
    }
  } catch (error) {
    console.error('Error in confirmOrganizationInterest:', error);
    next(error);
  }
}; 