import axios from 'axios';
import { config } from 'dotenv';

config();

const aiServiceClient = axios.create({
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

interface SlideExplanation {
  slideNumber: number;
  content: string;
  explanation: string;
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

export const generateSlideExplanations = async (s3Url: string, companyName: string): Promise<SlideExplanation[]> => {
  try {
    const response = await aiServiceClient.post('/generate_explanations', {
      s3_url: s3Url,
      company_name: companyName
    });
    return response.data.explanations;
  } catch (error) {
    console.error('Error generating slide explanations:', error);
    throw new Error('Failed to generate slide explanations');
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