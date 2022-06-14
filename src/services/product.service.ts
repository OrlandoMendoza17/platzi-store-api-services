import API from "../api";
import { CreateProductDto, UpdatedProductDto } from "../dtos/product.dto";
import {
  ProductsParams,
  IProduct,
  IProductsService,
} from "../models/product.model";

const API_URL = "/products";
class ProductsService implements IProductsService {

  async getAll(params: ProductsParams): Promise<IProduct[]> {
    const { data: products } = await API.get<IProduct[]>(API_URL, { params });
    return products;
  }

  async getByID(userId: number) {
    const { data: product } = await API.get<IProduct>(`${API_URL}/${userId}`);
    return product;
  }

  async create(newProduct: CreateProductDto) {
    const { data: product } = await API.post<IProduct>(API_URL, newProduct);
    return product;
  }

  async update(userId: IProduct["id"], updateProduct: CreateProductDto) {
    const { data: product } = await API.put<UpdatedProductDto>(`${API_URL}/${userId}`, updateProduct);
    return product;
  }

  async delete(userId: IProduct["id"]) {
    await API.delete(`${API_URL}/${userId}`);
  }
}

export default ProductsService;
