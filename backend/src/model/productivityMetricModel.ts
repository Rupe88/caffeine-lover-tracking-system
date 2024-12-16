import { Schema, model } from 'mongoose';
import { IProductivityMetric } from '../types/productivityMetricType';

const ProductivityMetricSchema = new Schema<IProductivityMetric>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    githubActivity: {
      commits: { type: Number, default: 0 },
      pullRequests: { type: Number, default: 0 },
      codeReviews: { type: Number, default: 0 },
      commitTimes: [Date], // Times of individual commits
    },
    vsCodeActivity: {
      activeTime: { type: Number, default: 0 }, // Total active time in minutes
      languagesUsed: [
        {
          language: { type: String, required: true },
          timeSpent: { type: Number, required: true }, // Time spent in minutes
        },
      ],
      peakHours: [String], // Array of time periods like ["09:00-10:00"]
    },
    caffeineCorrelation: {
      intakeIds: [{ type: Schema.Types.ObjectId, ref: 'CaffeineIntake' }],
      productivityScore: { type: Number, default: 0 },
      focusScore: { type: Number, default: 0 },
    },
  },
  { timestamps: true }
);

export const ProductivityMetric = model<IProductivityMetric>(
  'ProductivityMetric',
  ProductivityMetricSchema
);
