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

export default router; 