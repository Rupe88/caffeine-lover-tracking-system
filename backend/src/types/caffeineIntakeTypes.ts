import { Document, Types } from 'mongoose';

export interface ICaffeineIntake extends Document {
  userId: Types.ObjectId;
  drinkType: string;
  amount: number;
  caffeineContent: number;
  timestamp: Date;
  tags: string[];
  location?: string;
  mood?: string;
  correlations?: {
    productivityScore?: number;
    focusLevel?: number;
    githubCommits?: number;
  };
}
