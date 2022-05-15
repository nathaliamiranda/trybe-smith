import LoginModel from '../../models/login/login.model';
import connection from '../../models/connection';
import IUser from '../../interfaces/user.interface';
import IMessage from '../../interfaces/message.interface';
import IToken from '../../interfaces/token.interface';
import { signJwt } from '../../helpers/generate.token';

export default class LoginService {
  public model: LoginModel;

  constructor() {
    this.model = new LoginModel(connection);
  }

  public getOneUser = async (user: IUser): Promise<IMessage | IToken> => {    
    const getUser = await this.model.getOneUser(user);

    if (getUser === null) return { message: 'Username or password invalid' };

    const token = signJwt({ username: user.username });
    return { token };
  };
}  