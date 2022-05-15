import { Pool } from 'mysql2/promise';
import IUser from '../../interfaces/user.interface';

export default class LoginModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getOneUser = async (user: IUser): Promise<IUser | null> => {    
    const { username, password } = user;
    const [result] = await this.connection
      .execute(
        'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?',
        [username, password],
      );
    console.log('execute');
      
    const [getUser] = result as IUser[];
    return getUser || null; 
  };
}