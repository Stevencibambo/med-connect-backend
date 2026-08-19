import { Request, Response } from 'express';
import { PharmacistService } from '../services/pharmacistService';
import { PharmacistLogData } from '../types/pharmacist';

export class PharmacyController {

    static async createPharmacyLog(req: Request, res: Response)
    {
        try {
            const data: PharmacistLogData = req.body
            const prescriptionId = req.params.prescriptionId
            
            const result = await PharmacistService.createPharmacistLog({...data, prescriptionId: prescriptionId});

            return res.status(200).json({
                success: true,
                message: "Pharmacist Log created successfully",
                data: result,
            });

        } catch (error: any) {
            console.error("Dispense prescription error:", error);

            return res.status(error.statusCode || 500).json({
                success: false,
                error: {
                message:
                    error.message ||
                    "Failed to dispense prescription",
                statusCode: error.statusCode || 500,
                },
            });
        
        }
    }
}