import { Router } from 'express';
import productRouter from './product.routes';
import userRouter from './user.routes';

const router = Router();

router.use('/products', productRouter);
router.use('/users', userRouter);

export default router;