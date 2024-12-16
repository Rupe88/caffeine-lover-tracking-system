import { Document, Types } from 'mongoose';

export interface IProductivityMetric extends Document {
  userId: Types.ObjectId;
  date: Date;
  githubActivity: {
    commits: number;
    pullRequests: number;
    codeReviews: number;
    commitTimes: Date[];
  };
  vsCodeActivity: {
    activeTime: number; // in minutes
    languagesUsed: Array<{
      language: string;
      timeSpent: number;
    }>;
    peakHours: string[];
  };
  caffeineCorrelation: {
    intakeIds: Types.ObjectId[];
    productivityScore: number;
    focusScore: number;
  };
}
