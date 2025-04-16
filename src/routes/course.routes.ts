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
  fetchExplanations
} from '../controllers/course.controller';
import asyncHandler from 'express-async-handler';

const router = Router();

// Course management routes
router.post('/', asyncHandler(createCourse));
router.get('/', asyncHandler(getAllCourses));
router.get('/stats', asyncHandler(getCourseStats));
router.get('/:id', asyncHandler(getCourseById));
router.patch('/:id', asyncHandler(updateCourse));
router.delete('/:id', asyncHandler(deleteCourse));

// Course content and MCQ routes
router.get('/:id/content', asyncHandler(getCourseContent));
router.post('/:courseId/mcq-answers', asyncHandler(submitMCQAnswers));

// Tenant assignment
router.post('/assign', asyncHandler(assignCourseToTenant));

// Test AI service connection
router.get('/test-ai', asyncHandler(testAIService));

// Process course slides and generate video
router.post('/:id/process-slides', asyncHandler(processCourseSlides));

router.post('/:courseId/generate-explanations', asyncHandler(generateExplanations));
router.get('/:courseId/explanations', asyncHandler(fetchExplanations));

export default router; 