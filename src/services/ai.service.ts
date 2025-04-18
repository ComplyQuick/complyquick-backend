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

export const generateMCQs = async (s3Url: string): Promise<MCQQuestion[]> => {
  try {
    const response = await aiServiceClient.post('/generate-mcq', {
      s3_url: s3Url
    });
    return response.data.mcqs;
  } catch (error) {
    console.error('Error generating MCQs:', error);
    throw new Error('Failed to generate MCQs');
  }
};

export const generateSlideExplanations = async (
  s3Url: string, 
  companyName: string,
  tenantDetails: TenantDetails
): Promise<SlideExplanation[]> => {
  try {
    console.log('Generating explanations for:', { s3Url, companyName, tenantDetails });
    
    // Validate S3 URL
    if (!s3Url) {
      console.error('Invalid S3 URL:', s3Url);
      throw new Error('Invalid S3 URL provided');
    }

    // Format S3 URL to ensure it matches the required format
    let formattedS3Url = s3Url;
    if (s3Url.startsWith('https://')) {
      // If it's already an HTTPS URL, ensure it's properly formatted
      const url = new URL(s3Url);
      const pathParts = url.pathname.split('/');
      // Only encode the filename, not the path segments
      const filename = pathParts.pop();
      const encodedFilename = encodeURIComponent(filename || '');
      formattedS3Url = `https://${url.hostname}${pathParts.join('/')}/${encodedFilename}`;
    } else if (s3Url.startsWith('s3://')) {
      // Convert s3:// format to HTTPS URL
      const [bucket, ...keyParts] = s3Url.replace('s3://', '').split('/');
      const key = keyParts.join('/');
      formattedS3Url = `https://${bucket}.s3.amazonaws.com/${encodeURIComponent(key)}`;
    }

    // Ensure the URL is properly formatted for S3 access
    formattedS3Url = formattedS3Url.replace(/%2B/g, '+'); // Replace %2B with + for spaces
    formattedS3Url = formattedS3Url.replace(/%20/g, '+'); // Replace %20 with + for spaces

    console.log('Formatted S3 URL:', formattedS3Url);

    const requestBody = {
      s3_url: formattedS3Url,
      company_name: companyName,
      tenant_details: tenantDetails
    };

    console.log('Sending request to AI service:', {
      url: `${process.env.AI_SERVICE_URL}/generate_explanations`,
      body: requestBody
    });

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