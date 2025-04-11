import { S3 } from 'aws-sdk';
import { config } from 'dotenv';

config();

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

export const uploadToS3 = async (file: Buffer, key: string): Promise<string> => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
    Body: file
  };

  const result = await s3.upload(params).promise();
  return result.Location;
};

export const getSignedUrl = async (key: string): Promise<string> => {
  const params = {
    Bucket: process.env.S3_BUCKET_NAME!,
    Key: key,
    Expires: 2592000 
  };

  return s3.getSignedUrlPromise('getObject', params);
}; 