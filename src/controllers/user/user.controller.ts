import { NextFunction, Request, Response } from 'express';
import UserService from '../../services/user/user.service';

class UserController {
  constructor(private userService = new UserService()) { }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const user = req.body;

      const token = await this.userService.create(user);
      
      return res.status(201).json({ token });
    } catch (err) {
      console.log(err);
      
      next(err);
    }
  };
}

export default UserController;