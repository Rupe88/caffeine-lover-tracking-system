import { Schema, model } from 'mongoose';
import { IUser } from '../types/userTypes';

const UserSchema = new Schema<IUser>(
  {
    githubId: { type: String, required: true, unique: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (value: string) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Email regex validation
        },
        message: (props) => `${props.value} is not a valid email address!`,
      },
    },
    name: { type: String, required: true, trim:true },  
    avatarUrl: String,
    username: { type: String, required: true },
    preferences: {
      dailyLimit: { type: Number, default: 400 }, // in mg
      timezone: { type: String, default: 'UTC' },
      notifications: { type: Boolean, default: true },
    },
    teams: [{ type: Schema.Types.ObjectId, ref: 'Team' }],
  },
  { timestamps: true }
);

export const User = model<IUser>('User', UserSchema);
