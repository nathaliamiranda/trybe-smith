import { NextFunction, Request, Response } from 'express';
import UserService from '../../services/user/user.service';
import { signJwt } from '../../helpers/generate.token';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const user = req.body;

      await this.userService.create(user);

      const token = signJwt({ username: user.username });
      
      return res.status(201).json({ token });
    } catch (err) {
      console.log(err);
      
      next(err);
    }
  };
}

export default UserController;