import { Router } from 'express';
import OrderController from '../controllers/order/order.controller';
import isValidOrder from '../middlewares/order';
import verify from '../middlewares/auth';

const router = Router();

const orderController = new OrderController();

router.get('/', orderController.getAll);
router.post('/', verify, isValidOrder, orderController.create);

export default router;