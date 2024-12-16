import { Document, Types } from 'mongoose';

export interface ITeam extends Document {
  name: string;
  organization?: string;
  members: Array<{
    userId: Types.ObjectId;
    role: 'admin' | 'member';
    joinedAt: Date;
  }>;
  preferences: {
    shareInsights: boolean;
    allowCoffeeRuns: boolean;
    defaultReminders: boolean;
  };
}
