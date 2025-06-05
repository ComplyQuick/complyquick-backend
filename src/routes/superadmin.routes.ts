import { Router } from 'express';
import {
  deleteTenant,
  deleteCourse,
  updateCourse
} from '../controllers/superadmin.controller';
import asyncHandler from 'express-async-handler';
import multer from 'multer';

const router = Router();

// Configure multer for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50 * 1024 * 1024 // 50MB limit
  },
  fileFilter: (_req: any, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (file.mimetype === 'application/pdf' || 
        file.mimetype === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and PPTX files are allowed.'));
    }
  }
});

// Error handling middleware for multer
const handleMulterError = (err: any, req: any, res: any, next: any) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        error: 'File too large',
        details: 'Maximum file size is 50MB'
      });
    }
    return res.status(400).json({
      error: 'File upload error',
      details: err.message
    });
  }
  next(err);
};

// Superadmin routes
router.delete('/tenant/:id', asyncHandler(deleteTenant));
router.delete('/course/:id', asyncHandler(deleteCourse));
router.patch('/course/:id', upload.single('courseMaterial'), handleMulterError, asyncHandler(updateCourse));

export default router; 