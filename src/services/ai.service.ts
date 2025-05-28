import axios from 'axios';
import { config } from 'dotenv';
import { generateAndUploadAudio } from './tts.service';

config();

export const aiServiceClient = axios.create({
  baseURL: process.env.AI_SERVICE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

interface MCQQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface SlideExplanation {
  slideNumber: number;
  content: string;
  explanation: string;
}

export interface TenantDetails {
  presidingOfficerEmail?: string;
  poshCommitteeEmail?: string;
  hrContactName?: string;
  hrContactEmail?: string;
  hrContactPhone?: string;
  ceoName?: string;
  ceoEmail?: string;
  ceoContact?: string;
  ctoName?: string;
  ctoEmail?: string;
  ctoContact?: string;
  ccoEmail?: string;
  ccoContact?: string;
  croName?: string;
  croEmail?: string;
  croContact?: string;
  legalOfficerName?: string;
  legalOfficerEmail?: string;
  legalOfficerContact?: string;
}

export const generateMCQs = async (presentationUrl: string): Promise<MCQQuestion[]> => {
  try {
    const response = await aiServiceClient.post('/generate-mcq', {
      presentation_url: presentationUrl
    });
    return response.data.mcqs;
  } catch (error) {
    console.error('Error generating MCQs:', error);
    throw new Error('Failed to generate MCQs');
  }
};

export const generateSlideExplanations = async (
  materialUrl: string,
  companyName: string,
  tenantDetails: any
): Promise<Array<{ slide: number; explanation: string; explanation_audio: string }>> => {
  try {
    const response = await aiServiceClient.post('/generate_explanations', {
      presentation_url: materialUrl,
      company_name: companyName,
      tenant_details: {
        presidingOfficerEmail: tenantDetails.presidingOfficerEmail,
        poshCommitteeEmail: tenantDetails.poshCommitteeEmail,
        hrContactName: tenantDetails.hrContactName,
        hrContactEmail: tenantDetails.hrContactEmail,
        hrContactPhone: tenantDetails.hrContactPhone,
        ceoName: tenantDetails.ceoName,
        ceoEmail: tenantDetails.ceoEmail,
        ceoContact: tenantDetails.ceoContact,
        ctoName: tenantDetails.ctoName,
        ctoEmail: tenantDetails.ctoEmail,
        ctoContact: tenantDetails.ctoContact,
        ccoEmail: tenantDetails.ccoEmail,
        ccoContact: tenantDetails.ccoContact,
        croName: tenantDetails.croName,
        croEmail: tenantDetails.croEmail,
        croContact: tenantDetails.croContact,
        legalOfficerName: tenantDetails.legalOfficerName,
        legalOfficerEmail: tenantDetails.legalOfficerEmail,
        legalOfficerContact: tenantDetails.legalOfficerContact
      }
    });

    const explanations = response.data.explanations;

    // Generate audio for each explanation
    const explanationsWithAudio = await Promise.all(
      explanations.map(async (exp: { slide: number; explanation: string }) => {
        const audioUrl = await generateAndUploadAudio(exp.explanation);
        return {
          ...exp,
          explanation_audio: audioUrl
        };
      })
    );

    return explanationsWithAudio;
  } catch (error) {
    console.error('Error generating slide explanations:', error);
    throw error;
  }
};

export const getSlideUrls = async (courseId: string): Promise<string[]> => {
  try {
    const response = await aiServiceClient.get(`/slides/${courseId}`);
    return response.data.slideUrls;
  } catch (error) {
    console.error('Error fetching slide URLs:', error);
    throw new Error('Failed to fetch slide URLs');
  }
}; 