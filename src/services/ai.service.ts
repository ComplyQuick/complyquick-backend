import axios from 'axios';
import { config } from 'dotenv';

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
  presentationUrl: string, 
  companyName: string,
  tenantDetails: TenantDetails
): Promise<SlideExplanation[]> => {
  try {
    console.log('Generating explanations for:', { presentationUrl, companyName, tenantDetails });
    
    // Validate presentation URL
    if (!presentationUrl) {
      console.error('Invalid presentation URL:', presentationUrl);
      throw new Error('Invalid presentation URL provided');
    }

    const requestBody = {
      presentation_url: presentationUrl,
      company_name: companyName,
      tenant_details: tenantDetails
    };

    console.log('Sending request to AI service:', {
      url: `${process.env.AI_SERVICE_URL}/generate_explanations`,
      body: requestBody
    });[]

    const response = await aiServiceClient.post('/generate_explanations', requestBody);

    console.log('AI service response:', {
      status: response.status,
      statusText: response.statusText,
      data: response.data
    });

    if (!response.data || !Array.isArray(response.data.explanations)) {
      console.error('Invalid response format from AI service:', response.data);
      throw new Error('Invalid response format from AI service');
    }

    return response.data.explanations;
  } catch (error) {
    console.error('Error generating slide explanations:', error);
    if (axios.isAxiosError(error)) {
      console.error('AI Service Error Details:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        url: error.config?.url,
        method: error.config?.method,
        headers: error.config?.headers,
        baseURL: error.config?.baseURL
      });
      throw new Error(`AI Service Error: ${error.response?.status} ${error.response?.statusText} - ${JSON.stringify(error.response?.data)}`);
    }
    throw new Error('Failed to generate slide explanations: ' + (error instanceof Error ? error.message : 'Unknown error'));
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