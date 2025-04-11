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
  getCourseContent
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

export default router; 