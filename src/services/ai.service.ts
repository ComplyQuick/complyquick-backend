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
  explanation_audio?: string;
  explanation_subtitle?: string;
}

export interface POC {
  role: string;
  name: string;
  contact: string;
}

export interface TenantDetails {
  hrContactName?: string;
  hrContactEmail?: string;
  hrContactPhone?: string;
  ceoName?: string;
  ceoEmail?: string;
  ceoContact?: string;
  ctoName?: string;
  ctoEmail?: string;
  ctoContact?: string;
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
  pocs: POC[]
): Promise<Array<{ slide: number; explanation: string; explanation_audio: string; explanation_subtitle: string }>> => {
  try {
    const response = await aiServiceClient.post('/generate_explanations', {
      presentation_url: materialUrl,
      company_name: companyName,
      pocs
    });

    const explanations = response.data.explanations;

    // Generate audio and transcribe for each explanation
    const explanationsWithAudioAndSubtitle = await Promise.all(
      explanations.map(async (exp: { slide: number; explanation: string }) => {
        // Generate audio
        const audioUrl = await generateAndUploadAudio(exp.explanation);
        
        // Transcribe audio
        const transcriptionResponse = await aiServiceClient.post('/transcribe_audio', {
          audio_url: audioUrl
        });
        
        return {
          ...exp,
          explanation_audio: audioUrl,
          explanation_subtitle: transcriptionResponse.data.transcription
        };
      })
    );

    return explanationsWithAudioAndSubtitle;
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