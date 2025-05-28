import { PrismaClient } from '@prisma/client';
import { generateSlideExplanations } from './ai.service';

const prisma = new PrismaClient();

export const generateAndStoreExplanations = async (
  courseId: string,
  materialUrl: string,
  companyName: string,
  tenantDetails: any
): Promise<void> => {
  try {
    // Check if explanations already exist
    const existingExplanations = await prisma.slideExplanation.findMany({
      where: { courseId }
    });

    if (existingExplanations.length > 0) {
      return;
    }

    // Generate explanations with audio and subtitles
    const explanations = await generateSlideExplanations(
      materialUrl,
      companyName,
      tenantDetails
    );

    // Store explanations in database
    await Promise.all(
      explanations.map(exp =>
        prisma.slideExplanation.create({
          data: {
            courseId,
            slideNumber: exp.slide,
            explanation: exp.explanation,
            explanation_audio: exp.explanation_audio,
            explanation_subtitle: exp.explanation_subtitle
          }
        })
      )
    );
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