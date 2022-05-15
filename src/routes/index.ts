import { Router } from 'express';
import productRouter from './product.routes';
import userRouter from './user.routes';
import ordersRouter from './orders.routes';
import loginRouter from './login.routes';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);
router.use('/orders', ordersRouter);
router.use('/login', loginRouter);

export default router;