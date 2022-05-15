import { NextFunction, Request, Response } from 'express';
import LoginService from '../../services/login/login.service';

class LoginController {
  constructor(private loginService = new LoginService()) { }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const user = req.body;
      const { message, token } = await this.loginService.getOneUser(user);

      if (message) {
        return res.status(401).json({ message });
      }
          
      return res.status(200).json({ token });
    } catch (err) {
      console.log(err);
      
      next(err);
    }
  };
}

export default LoginController;