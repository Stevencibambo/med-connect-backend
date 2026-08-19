import { Router } from 'express';
import { PharmacyController } from '../controllers/pharmacyContoller';
import {
  authenticateToken,
  requireRole,
  requireDoctor
} from '../middleware/auth';
import { User, UserRole } from '../models';
import { validateBody, validateQuery, validateParams } from '../middleware/validation';
import { 
  prescriptionSchema, 
  searchQuerySchema, 
  paginationSchema,
  advancedPaginationSchema,
  prescriptionIdParamSchema
} from '../validation/schemas';

const router = Router();

// Protected routes (authentication required)
router.post('/pharmacist/:prescriptionId/log', authenticateToken, requireRole([UserRole.ADMIN, UserRole.PHARMACIST]), validateParams(prescriptionIdParamSchema), PharmacyController.createPharmacyLog);


export default router;
