import { Document, Types } from 'mongoose';

export interface IUser extends Document {
  githubId: string;
  email: string;
  name: string;
  avatarUrl: string;
  username: string;
  preferences: {
    dailyLimit: number;
    timezone: string;
    notifications: boolean;
    theme: 'light' | 'dark';
  };
  teams: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}
