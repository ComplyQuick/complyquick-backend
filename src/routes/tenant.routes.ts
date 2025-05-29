import { Router } from 'express';
import {
  createTenant,
  addTenantDetails,
  getTenantDetails,
  updateTenantDetails,
  getTenantStats,
  getActiveTenants,
  getInactiveTenants,
  getAllTenants,
  getTenantById
} from '../controllers/tenant.controller';
import asyncHandler from 'express-async-handler';
import { getPOCsForCourse } from '../controllers/course.controller';

const router = Router();

// All routes are public
router.post('/', asyncHandler(createTenant));
router.get('/', asyncHandler(getAllTenants));
router.get('/stats', asyncHandler(getTenantStats));
router.get('/active', asyncHandler(getActiveTenants));
router.get('/inactive', asyncHandler(getInactiveTenants));
router.get('/:id', asyncHandler(getTenantById));
router.post('/:id/details', asyncHandler(addTenantDetails));
router.get('/:id/details', asyncHandler(getTenantDetails));
router.patch('/:id/details', asyncHandler(updateTenantDetails));

// Add the new endpoint for fetching POCs for a course in a tenant
router.get('/:tenantId/courses/:courseId/pocs', asyncHandler(getPOCsForCourse));

export default router; 