import { Request, Response, NextFunction } from 'express';

const error = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err.details[0].message.includes('required')) {
    return res.status(400).json({ message: err.message });
  }
  if (err) return res.status(422).json({ message: err.message });

  return res.status(500).json({ message: 'Server error' });
};

export default error;
