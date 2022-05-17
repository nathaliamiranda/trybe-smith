import { NextFunction, Request, Response } from 'express';
import { verifyJwt } from '../helpers/generate.token';
import IJwtAuth from '../interfaces/auth.jwt.interface';

const verify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const { data } = verifyJwt(token) as IJwtAuth;
    
    req.user = data.id;

    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid token',
    });
  }
};

export default verify;