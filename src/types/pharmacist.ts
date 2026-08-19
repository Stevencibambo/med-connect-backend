import { PharmacistLogAction } from "./common";

export interface PharmacistLogRegistration {
    prescriptionId: string;
    pharmacistId: string;
    action: PharmacistLogAction
}

export interface PharmacistLogData {
    prescriptionId: string;
    pharmacistId: string
}