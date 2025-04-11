import { Router, RequestHandler } from 'express';
import { PrismaClient } from '../generated/prisma';
import {
  addTenantDetails,
  getTenantDetails,
  updateTenantDetails,
  getTenantStats,
  getActiveTenants,
  getInactiveTenants
} from '../controllers/tenant.controller';
import asyncHandler from 'express-async-handler';

const router = Router();
const prisma = new PrismaClient();

interface TenantRequest {
  name: string;
  domain: string;
}

// Create a new tenant
const createTenant: RequestHandler = async (req, res, next) => {
  try {
    const { name, domain } = req.body;
    const tenant = await prisma.tenant.create({
      data: {
        name,
        domain
      }
    });
    res.json(tenant);
  } catch (error) {
    next(error);
  }
};

// Get all tenants
const getAllTenants: RequestHandler = async (_req, res, next) => {
  try {
    const tenants = await prisma.tenant.findMany({
      include: {
        details: true,
        users: true
      }
    });
    res.json(tenants);
  } catch (error) {
    next(error);
  }
};

// Get tenant by ID
const getTenantById: RequestHandler<{ id: string }> = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tenant = await prisma.tenant.findUnique({
      where: { id },
      include: {
        details: true,
        users: true,
        courses: true
      }
    });
    if (!tenant) {
      res.status(404).json({ error: 'Tenant not found' });
      return;
    }
    res.json(tenant);
  } catch (error) {
    next(error);
  }
};

// All routes are public
router.post('/', asyncHandler(createTenant));
router.get('/', asyncHandler(getAllTenants));
router.get('/:id', asyncHandler(getTenantById));
router.post('/:id/details', asyncHandler(addTenantDetails as RequestHandler));
router.get('/:id/details', asyncHandler(getTenantDetails as RequestHandler));
router.patch('/:id/details', asyncHandler(updateTenantDetails as RequestHandler));
router.get('/stats', asyncHandler(getTenantStats as RequestHandler));
router.get('/active', asyncHandler(getActiveTenants as RequestHandler));
router.get('/inactive', asyncHandler(getInactiveTenants as RequestHandler));

export default router; 