import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
import IOrder from '../../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public getAll = async (): Promise<IOrder[]> => {
    const [orders] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Orders');

    const [products] = await this.connection
      .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.Products');

    const result = orders.map((ord) => ({
      ...ord, 
      productsIds: products
        .filter((prod) => prod.orderId === ord.id)
        .map((e) => e.id) }));
    return result as IOrder[];
  };

  public create = async (order: IOrder): Promise<void> => {
    const { userId, productsIds } = order;
    
    const [{ insertId }] = await this.connection
      .execute<ResultSetHeader>('INSERT INTO Trybesmith.Orders (userId) VALUES (?)', [userId]);
    
    console.log('oi');
    productsIds.forEach(async (id) => {
      await this.connection
        .execute('UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?', [insertId, id]);
    });
  };
}
export default OrderModel;