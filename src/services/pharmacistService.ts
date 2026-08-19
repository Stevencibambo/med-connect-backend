import { PharmacyAction, PharmacyLog, Prescription, User } from "../models";
import { PharmacistLogData } from "../types/pharmacist";

export class PharmacistService {
    static async createPharmacistLog(data: PharmacistLogData): Promise<PharmacyLog>
    {
        const prescription = await Prescription.findByPk(data.prescriptionId);

        if(!prescription)
        {
            throw new Error('Prescription introuvable');
        }

        // Verify Pharmacist
        let pharmacist = await User.findByPk(data.pharmacistId);
        if(!pharmacist)
        {
            throw new Error('Pharmacist introuvable');
        }
        // create pharmacist log
        const log = await PharmacyLog.create({
            prescriptionId: data.prescriptionId,
            pharmacistId: data.pharmacistId,
            action: PharmacyAction.SCANNED
        })

        // increment QR Code Scanned Account
        return log;
    }
}