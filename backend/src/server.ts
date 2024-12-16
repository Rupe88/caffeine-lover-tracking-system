import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import AppError from './utils/appError';
import globalErrorHandler from './middleware/errorHandler';
import dotenv from 'dotenv';
import connectionDB from './config/connection ';
dotenv.config();

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle undefined routes
app.all('*', (req: Request, res: Response, next: NextFunction) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Global error handler
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  connectionDB();
});
