import connection from '../../models/connection';
import OrderModel from '../../models/order/order.model';
import IOrder from '../../interfaces/order.interface';

export default class OrderService {
  public model: OrderModel;
  
  constructor() {
    this.model = new OrderModel(connection);
  }

  public getAll = async (): Promise<IOrder[]> => {
    const orders = await this.model.getAll();
    return orders;
  };

  public create = async (order: IOrder): Promise<void> => {
    await this.model.create(order);
  };
}