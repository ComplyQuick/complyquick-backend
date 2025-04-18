import { PrismaClient } from '@prisma/client';
import { generateSlideExplanations } from './ai.service';

const prisma = new PrismaClient();

export const generateAndStoreExplanations = async (courseId: string, tenantId: string) => {
  try {
    // Get course and tenant details
    const course = await prisma.course.findUnique({
      where: { id: courseId },
      include: { tenants: true }
    });

    if (!course) {
      throw new Error('Course not found');
    }

    const tenant = await prisma.tenant.findUnique({
      where: { id: tenantId },
      include: { details: true }
    });

    if (!tenant) {
      throw new Error('Tenant not found');
    }

    if (!tenant.details) {
      throw new Error('Tenant details not found');
    }

    // Check if explanations already exist
    const existingExplanations = await prisma.slideExplanation.findMany({
      where: { courseId }
    });

    if (existingExplanations.length > 0) {
      return existingExplanations;
    }

    // Generate explanations using AI service
    const explanations = await generateSlideExplanations(
      course.materialUrl, 
      tenant.name,
      {
        presidingOfficerEmail: tenant.details.presidingOfficerEmail,
        poshCommitteeEmail: tenant.details.poshCommitteeEmail,
        hrContactName: tenant.details.hrContactName,
        hrContactEmail: tenant.details.hrContactEmail,
        hrContactPhone: tenant.details.hrContactPhone,
        ceoName: tenant.details.ceoName,
        ceoEmail: tenant.details.ceoEmail,
        ceoContact: tenant.details.ceoContact,
        ctoName: tenant.details.ctoName,
        ctoEmail: tenant.details.ctoEmail,
        ctoContact: tenant.details.ctoContact,
        ccoEmail: tenant.details.ccoEmail,
        ccoContact: tenant.details.ccoContact,
        croName: tenant.details.croName,
        croEmail: tenant.details.croEmail,
        croContact: tenant.details.croContact,
        legalOfficerName: tenant.details.legalOfficerName,
        legalOfficerEmail: tenant.details.legalOfficerEmail,
        legalOfficerContact: tenant.details.legalOfficerContact
      }
    );

    // Store explanations in database
    const storedExplanations = await Promise.all(
      explanations.map((exp, index) =>
        prisma.slideExplanation.create({
          data: {
            courseId,
            slideNumber: index + 1,
            explanation: exp.explanation
          }
        })
      )
    );

    return storedExplanations;
  } catch (error) {
    console.error('Error generating and storing explanations:', error);
    throw error;
  }
};

export const getSlideExplanations = async (courseId: string) => {
  try {
    const explanations = await prisma.slideExplanation.findMany({
      where: { courseId },
      orderBy: { slideNumber: 'asc' }
    });

    return explanations;
  } catch (error) {
    console.error('Error fetching slide explanations:', error);
    throw error;
  }
}; 