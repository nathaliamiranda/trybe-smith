import jwt from 'jsonwebtoken';
import IUsername from '../interfaces/username.interface';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const SECRET = 'Jesus';

export const signJwt = (payload: IUsername) => jwt.sign({ data: payload }, SECRET, jwtConfig);
export const verifyJwt = (payload: string) => jwt.verify(payload, SECRET);