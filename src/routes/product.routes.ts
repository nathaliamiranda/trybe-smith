import { Router } from 'express';
import ProductController from '../controllers/product/getall.product.controler';
import productValidate from '../middlewares/product';

const router = Router();

const productController = new ProductController();

router.get('/products', productController.getAll);
router.post('/products', productValidate, productController.create);

export default router;