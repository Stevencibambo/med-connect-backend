
import { User, Prescription, Patient, PrescriptionItem, QRCode, PharmacyLog, PharmacyAction } from '../models'
import { PrescriptionStatus } from '../models/Prescription';
import { PrescriptionDispensed } from '../models/PrescriptionDispensed';
import { PharmacistLogData } from '../types/pharmacist';

export class PrescriptionService {
    
    static async dispensePrescription(data: PharmacistLogData): Promise<PharmacyLog>
    {
        // 1. Récupérer la prescription
        const prescription = await Prescription.findByPk(data.prescriptionId,);

        if (!prescription) {
            const error = new Error("Prescription not found");
            (error as any).statusCode = 404;
            throw error;
        }
        // 2. Vérifier le statut
        if (prescription.status !== PrescriptionStatus.PENDING) 
        {
            const error = new Error(
                `Prescription cannot be dispensed because its status is ${prescription.status}`
            );

            (error as any).statusCode = 400;

            throw error;
        }
        const qrCode = await QRCode.findOne({ where: {prescriptionId: prescription.id}});

        // 3. Vérifier le QR code
        if (!qrCode) {
            const error = new Error(
                "No QR code associated with this prescription"
            );

            (error as any).statusCode = 400;
            throw error;
        }

        // if (prescription.qrCode.isUsed) {
        //     const error = new Error(
        //         "This prescription QR code has already been used"
        //     );

        //     (error as any).statusCode = 400;

        //     throw error;
        // }

        // 4. Vérifier le pharmacien
        const pharmacist = await User.findByPk(data.pharmacistId)
        
        if (!pharmacist) {
            const error = new Error("Pharmacist not found");
            (error as any).statusCode = 404;
            throw error;
        }

        // 5. Créer l'enregistrement de délivrance
        const log = await PharmacyLog.create({
                prescriptionId: prescription.id,
                pharmacistId: data.pharmacistId,
                action: PharmacyAction.FULFILLED
            });

        // 6. Modifier le statut de la prescription
        await prescription.update({status: PrescriptionStatus.FULFILLED});

        // 7. Marquer le QR comme utilisé
        await qrCode.update({ isUsed: true});
        
        // 8. Retourner les informations
        return log
    }
}