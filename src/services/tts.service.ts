import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import { uploadToS3 } from './aws.service';
import { v4 as uuidv4 } from 'uuid';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
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

    // Generate speech using OpenAI
    const mp3 = await openai.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice: "nova",
      input: text,
      instructions: "Speak in a Patient teacher tone"
    });

    // Convert to buffer and save temporarily
    const buffer = Buffer.from(await mp3.arrayBuffer());
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