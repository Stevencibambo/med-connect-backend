import { Model, DataTypes, UUIDV4 } from 'sequelize';
import { sequelize } from '../database/config/database';
import Prescription from './Prescription';
import User from './User';

export class PrescriptionDispensed extends Model {
  public id!: string;
  public prescriptionId!: string;
  public pharmacistId!: string;
  public dispensedAt!: Date;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

PrescriptionDispensed.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true,
    },
    prescriptionId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: Prescription,
        key: 'id',
      },
    },
    pharmacistId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: 'id',
      },
    },
    dispensedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    }
  },
  {
    sequelize,
    tableName: 'prescription_dispensed',
    modelName: 'PrescriptionDispensed'
  }
);

PrescriptionDispensed.belongsTo(Prescription, { foreignKey: 'prescriptionId', as: 'prescription' });
PrescriptionDispensed.belongsTo(User, {foreignKey: 'pharmacistId', as: 'users'});

Prescription.hasMany(PrescriptionDispensed, { foreignKey: 'prescriptionId', as: 'dispensed' });
User.hasMany(PrescriptionDispensed, {foreignKey: 'pharmacistId', as: 'dispensed'})