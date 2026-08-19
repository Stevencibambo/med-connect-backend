import { Router } from 'express';
import authRoutes from './auth';
import patientRoutes from './patients';
import doctorRoutes from './doctors';
import qrCodeRoutes from './qrCodes';
import pharmacistRoutes from './pharmacists';

const routers = Router();

const allRoutes = [authRoutes, patientRoutes, doctorRoutes, qrCodeRoutes, pharmacistRoutes];

routers.use('/', ...allRoutes);

export { routers };