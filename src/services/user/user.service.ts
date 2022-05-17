import connection from '../../models/connection';
import UserModel from '../../models/user/user.model';
import IUser from '../../interfaces/user.interface';
import { signJwt } from '../../helpers/generate.token';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public create = async (user: IUser): Promise<string> => {
    const { id } = await this.model.create(user);
    return signJwt({ id, username: user.username });
  };
}

export default UserService;