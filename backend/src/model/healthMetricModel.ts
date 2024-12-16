import { Schema, model } from 'mongoose';
import { IHealthMetric } from '../types/healthMetricTypes';

const HealthMetricSchema = new Schema<IHealthMetric>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    sleepQuality: { type: Number, min: 1, max: 10 },
    anxietyLevel: { type: Number, min: 1, max: 10 },
    heartRate: [
      {
        time: { type: Date, required: true },
        value: { type: Number, required: true },
      },
    ],
    headache: { type: Boolean, default: false },
    jitters: { type: Boolean, default: false },
    notes: { type: String },
  },
  { timestamps: true }
);

export const HealthMetric = model<IHealthMetric>('HealthMetric', HealthMetricSchema);
