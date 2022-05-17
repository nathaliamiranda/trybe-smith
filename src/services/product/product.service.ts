import connection from '../../models/connection';
import ProductModel from '../../models/product/product.model';
import IProduct from '../../interfaces/product.interface';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public getAll = async (): Promise<IProduct[]> => {
    const products = await this.model.getAll();
    return products;
  };

  public create = (product: IProduct): Promise<IProduct> => this.model.create(product);
}

export default ProductService;