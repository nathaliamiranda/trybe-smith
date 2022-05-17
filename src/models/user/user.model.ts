import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../../interfaces/user.interface';

export default class ProductModel {
  public connection: Pool;
  
  constructor(connection: Pool) {
    this.connection = connection;
  }
  
  public create = async (user: IUser): Promise<IUser> => {
    const { username, classe, password, level } = user;

    const [result] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, password, level) VALUES (?, ?, ?, ?)',
      [username, classe, password, level],
    );
    const { insertId: id } = result;
    const newUser: IUser = { id, username, classe, password, level };
    return newUser;
  };
}