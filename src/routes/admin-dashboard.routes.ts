import { Router } from 'express';
import {
  getTrainingStatistics,
  getRecentUserActivity,
  getUserCompletionStatus
} from '../controllers/admin-dashboard.controller';
import asyncHandler from 'express-async-handler';

const router = Router();

// Get overall training statistics
router.get('/statistics', asyncHandler(getTrainingStatistics));

// Get recent user activity
router.get('/recent-activity', asyncHandler(getRecentUserActivity));

// Get detailed user completion status
router.get('/user-completion', asyncHandler(getUserCompletionStatus));

export default router; 