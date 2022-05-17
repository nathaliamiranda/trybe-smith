import { Pool, ResultSetHeader } from 'mysql2/promise';
import Iproduct from '../../interfaces/product.interface';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<Iproduct[]> => {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Products;');
    const [rows] = result;
    return rows as Iproduct[];
  };

  public create = async (product: Iproduct): Promise<Iproduct> => {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  };
}