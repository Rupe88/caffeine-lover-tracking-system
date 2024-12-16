import { Schema, model } from 'mongoose';
import { ICaffeineIntake } from '../types/caffeineIntakeTypes';

const CaffeineIntakeSchema = new Schema<ICaffeineIntake>(
  {
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    drinkType: { type: String, required: true },
    amount: { type: Number, required: true }, // in ml/oz
    caffeineContent: { type: Number, required: true }, // in mg
    timestamp: { type: Date, default: Date.now },
    tags: [String],
    location: String,
    mood: String,
    correlations: {
      productivityScore: Number,
      focusLevel: Number,
      githubCommits: Number,
    },
  },
  { timestamps: true }
);

export const CaffeineIntake = model<ICaffeineIntake>('CaffeineIntake', CaffeineIntakeSchema);
