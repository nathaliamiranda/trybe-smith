import { Router } from 'express';
import OrderController from '../controllers/order/order.controller';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);

export default router;