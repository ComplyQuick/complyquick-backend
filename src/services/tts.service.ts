import fs from 'fs';
import path from 'path';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { uploadToS3 } from './aws.service';
import { v4 as uuidv4 } from 'uuid';
import { config } from 'dotenv';

config();

// Initialize Google Cloud Text-to-Speech client
const client = new TextToSpeechClient({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    project_id: process.env.GOOGLE_PROJECT_ID
  }
});

export const generateAndUploadAudio = async (text: string): Promise<string> => {
  try {
    // Generate unique filename
    const filename = `${uuidv4()}.mp3`;
    const tempFilePath = path.resolve(`./temp/${filename}`);

    // Ensure temp directory exists
    if (!fs.existsSync('./temp')) {
      fs.mkdirSync('./temp');
    }

    // Configure the request
    const request = {
      input: { text },
      voice: {
        languageCode: process.env.TTS_LANGUAGE_CODE || 'en-IN',
        name: process.env.TTS_VOICE_NAME || 'en-IN-Standard-A',
        ssmlGender: (process.env.TTS_GENDER || 'FEMALE') as 'FEMALE' | 'MALE' | 'NEUTRAL'
      },
      audioConfig: {
        audioEncoding: 'MP3' as const,
        speakingRate: Number(process.env.TTS_SPEAKING_RATE) || 1.0,
        pitch: Number(process.env.TTS_PITCH) || 0.0,
        volumeGainDb: Number(process.env.TTS_VOLUME_GAIN) || 0.0
      }
    };

    // Generate speech using Google Cloud TTS
    const response = await client.synthesizeSpeech(request);
    
    if (!response[0].audioContent) {
      throw new Error('No audio content generated');
    }

    // Convert to buffer and save temporarily
    const audioContent = response[0].audioContent;
    const buffer = Buffer.from(audioContent as Uint8Array);
    await fs.promises.writeFile(tempFilePath, buffer);

    // Upload to S3
    const s3Key = `audio/${filename}`;
    await uploadToS3(buffer, s3Key);

    // Clean up temp file
    await fs.promises.unlink(tempFilePath);

    // Return S3 URL
    return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${s3Key}`;
  } catch (error) {
    console.error('Error generating and uploading audio:', error);
    throw error;
  }
}; 