import { Router } from 'express';
import {
  createCourse,
  getAllCourses,
  getCourseById,
  updateCourse,
  deleteCourse,
  assignCourseToTenant,
  getCourseStats,
  submitMCQAnswers,
  getCourseContent,
  processCourseSlides,
  testAIService,
  generateExplanations,
  fetchExplanations,
  getCourseMaterialForChatbot,
  updateCourseProgress,
  generalChatbot,
  getUserCourseProgress,
  getAllUsersProgress,
  addPOCForCourse
} from '../controllers/course.controller';
import asyncHandler from 'express-async-handler';
import { authenticateToken } from '../middleware/auth.middleware';
import { AuthenticatedRequest } from '../controllers/course.controller';
import { Response, NextFunction } from 'express';
import multer from 'multer';
import express from 'express';

const router = Router();

// Configure multer for file upload
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 25 * 1024 * 1024 // 25MB limit
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

// Course management routes
router.post('/', upload.single('courseMaterial'), asyncHandler(createCourse));
router.get('/', asyncHandler(getAllCourses));
router.get('/stats', asyncHandler(getCourseStats));
router.get('/:id', asyncHandler(getCourseById));
router.put('/:id', asyncHandler(updateCourse));
router.delete('/:id', asyncHandler(deleteCourse));

// Course content and MCQ routes
router.get('/:id/content', asyncHandler(getCourseContent));
router.post('/:courseId/mcq-answers', asyncHandler(submitMCQAnswers));

// Tenant assignment
router.post('/assign', authenticateToken, asyncHandler(assignCourseToTenant));

// Test AI service connection
router.get('/test-ai', asyncHandler(testAIService));

// Process course slides and generate video
router.post('/:id/process-slides', express.json(), asyncHandler(processCourseSlides));

router.post('/:courseId/generate-explanations', asyncHandler(generateExplanations));
router.get('/:courseId/explanations', asyncHandler(fetchExplanations));
router.get('/:courseId/chatbot-material', asyncHandler(getCourseMaterialForChatbot));

router.post('/general-chatbot', asyncHandler(generalChatbot));

// Progress tracking routes
router.get('/progress/user', asyncHandler(getUserCourseProgress));
router.get('/progress/all', asyncHandler(getAllUsersProgress));
router.post('/:courseId/update-progress', authenticateToken, asyncHandler(updateCourseProgress as any));

// Add POCs for a course assignment (TenantCourse)
router.post('/add-poc', asyncHandler(addPOCForCourse));

export default router; 