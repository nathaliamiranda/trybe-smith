import jwt from 'jsonwebtoken';
import IPayloadToken from '../interfaces/verify.token';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const SECRET = '1D24JGU4598FEH402JLB';

export const signJwt = (payload: IPayloadToken) => jwt.sign({ data: payload }, SECRET, jwtConfig);
export const verifyJwt = (payload: string) => jwt.verify(payload, SECRET);