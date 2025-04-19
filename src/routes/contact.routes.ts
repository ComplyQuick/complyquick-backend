import { Router } from 'express';
import { submitContactRequest, confirmOrganizationInterest } from '../controllers/contact.controller';
import asyncHandler from 'express-async-handler';

const router = Router();

router.post('/submit', asyncHandler(submitContactRequest));
router.post('/confirm/:organizationName', asyncHandler(confirmOrganizationInterest));

export default router; 