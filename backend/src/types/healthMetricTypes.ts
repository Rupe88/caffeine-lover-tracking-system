import { Document, Types } from 'mongoose';

export interface IHealthMetric extends Document {
  userId: Types.ObjectId;
  date: Date;
  sleepQuality?: number; // Scale from 1 to 10
  anxietyLevel?: number; // Scale from 1 to 10
  heartRate?: Array<{
    time: Date;
    value: number;
  }>;
  headache?: boolean;
  jitters?: boolean;
  notes?: string; // Optional notes about health
}
