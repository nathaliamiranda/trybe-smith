import { Request, Response, NextFunction } from 'express';
import OrderService from '../../services/order/order.service';

class OrderController {
  constructor(private orderService = new OrderService()) { }

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const orders = await this.orderService.getAll();
  
      return res.status(200).json(orders);
    } catch (err) {
      next(err);
    }
  };
  
  public create = async (req: Request, res: Response, next: NextFunction) => {
    const { productsIds } = req.body;
    const { user: userId } = req;
    
    try {
      await this.orderService.create({ userId, productsIds });
      return res.status(201).json({ userId, productsIds });
    } catch (err) {      
      next(err);
    }
  };
}
export default OrderController;