import { NextFunction, Request, Response } from 'express';
import ProductService from '../../services/product/gettall.product.service';

class ProductController {
  constructor(private productService = new ProductService()) { }

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try { 
      const products = await this.productService.getAll();
      return res.status(200).json(products);
    } catch (err) {
      next();
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try { 
      const product = req.body;

      const productCreated = await this.productService.create(product);
      return res.status(201).json(productCreated);
    } catch (err) {
      next(err);
    }
  };
}

export default ProductController;