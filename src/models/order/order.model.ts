import { Pool, RowDataPacket } from 'mysql2/promise';
import IOrder from '../../interfaces/order.interface';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrder[]> {
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
  }
}
export default OrderModel;