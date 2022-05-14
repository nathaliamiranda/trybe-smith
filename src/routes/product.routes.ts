import { Router } from 'express';
import ProductController from '../controllers/product/product.controller';
import productValidate from '../middlewares/product';

const router = Router();

const productController = new ProductController();

router.get('/', productController.getAll);
router.post('/', productValidate, productController.create);

export default router;