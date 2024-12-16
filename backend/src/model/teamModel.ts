import { Schema, model } from 'mongoose';
import { ITeam } from '../types/teamTypes';

const TeamSchema = new Schema<ITeam>(
  {
    name: { type: String, required: true },
    organization: String,
    members: [
      {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        role: { type: String, enum: ['admin', 'member'], default: 'member' },
        joinedAt: { type: Date, default: Date.now },
      },
    ],
    preferences: {
      shareInsights: { type: Boolean, default: true },
      allowCoffeeRuns: { type: Boolean, default: true },
      defaultReminders: { type: Boolean, default: true },
    },
  },
  { timestamps: true }
);

export const Team = model<ITeam>('Team', TeamSchema);
