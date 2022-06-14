import API from "../api";
import { productsParams, IProduct, IProductsService} from "../models/product.model";

class ProductsService implements IProductsService {
  url: string = "/products";

  async getAll(params: productsParams ): Promise<IProduct[]> {
    // const params: productsParams = { limit, offset };
    
    const { data: products } = await API.get(this.url, { params });
    return products;
  }
  async create() {
    throw new Error("Method not implemented.");
  }
  async update() {
    throw new Error("Method not implemented.");
  }
  async delete() {
    throw new Error("Method not implemented.");
  }
}

export default ProductsService;