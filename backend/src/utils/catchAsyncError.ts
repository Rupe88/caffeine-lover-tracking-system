import { Request, Response, NextFunction } from 'express';

/**
 * A utility to handle async errors without repetitive try-catch blocks.
 * Wraps an async function and forwards any errors to the Express error handler.
 */
const catchAsyncError =
  (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) =>
  (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };

export default catchAsyncError;