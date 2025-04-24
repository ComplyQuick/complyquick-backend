import { google } from 'googleapis';
import { config } from 'dotenv';
import { Readable } from 'stream';

config();

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_DRIVE_CLIENT_ID,
  process.env.GOOGLE_DRIVE_CLIENT_SECRET,
  process.env.GOOGLE_DRIVE_REDIRECT_URI
);

oauth2Client.setCredentials({
  refresh_token: process.env.GOOGLE_DRIVE_REFRESH_TOKEN
});

const drive = google.drive({ version: 'v3', auth: oauth2Client });

export const uploadToGoogleDrive = async (fileBuffer: Buffer, fileName: string): Promise<string> => {
  try {
    const fileMetadata = {
      name: fileName,
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!]
    };

    // Convert Buffer to Readable stream
    const bufferStream = new Readable();
    bufferStream.push(fileBuffer);
    bufferStream.push(null);

    const media = {
      mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      body: bufferStream
    };

    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, webViewLink'
    });

    // Make the file publicly accessible
    await drive.permissions.create({
      fileId: response.data.id!,
      requestBody: {
        role: 'reader',
        type: 'anyone'
      }
    });

    return response.data.webViewLink!;
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    throw error;
  }
};

export const getFileUrl = async (fileId: string): Promise<string> => {
  try {
    const response = await drive.files.get({
      fileId,
      fields: 'webViewLink'
    });
    return response.data.webViewLink!;
  } catch (error) {
    console.error('Error getting file URL:', error);
    throw error;
  }
}; 