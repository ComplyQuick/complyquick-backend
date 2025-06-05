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
    // Convert Buffer to Readable stream
    const bufferStream = new Readable();
    bufferStream.push(fileBuffer);
    bufferStream.push(null);

    // First, check if a file with the same name exists
    const existingFiles = await drive.files.list({
      q: `name = '${fileName}' and '${process.env.GOOGLE_DRIVE_FOLDER_ID}' in parents and trashed = false`,
      fields: 'files(id, name)'
    });

    let fileId: string;

    if (existingFiles.data.files && existingFiles.data.files.length > 0) {
      // If file exists, update it
      const existingFile = existingFiles.data.files[0];
      if (!existingFile.id) {
        throw new Error('Existing file has no ID');
      }
      fileId = existingFile.id;
      await drive.files.update({
        fileId: fileId,
        media: {
          mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
          body: bufferStream
        }
      });
    } else {
      // If file doesn't exist, create new
      const fileMetadata = {
        name: fileName,
        mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        parents: [process.env.GOOGLE_DRIVE_FOLDER_ID!]
      };

      const media = {
        mimeType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
        body: bufferStream
      };

      const response = await drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: 'id, webViewLink'
      });

      if (!response.data.id) {
        throw new Error('Failed to get file ID after creation');
      }
      fileId = response.data.id;
    }

    // Get the file's webViewLink
    const file = await drive.files.get({
      fileId: fileId,
      fields: 'webViewLink'
    });

    if (!file.data.webViewLink) {
      throw new Error('Failed to get webViewLink for the uploaded file');
    }

    // Make the file accessible to anyone with the link
    await drive.permissions.create({
      fileId: fileId,
      requestBody: {
        role: 'reader',
        type: 'anyone'
      }
    });

    return file.data.webViewLink;
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