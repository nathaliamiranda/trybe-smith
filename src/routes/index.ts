import { Router } from 'express';
import productRouter from './product.routes';
import userRouter from './user.routes';
import ordersRouter from './orders.routes';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', ordersRouter);

export default router;