import { ICategory } from "./category.model";
import { CreateProductDto, UpdatedProductDto } from "../dtos/product.dto";

export type IProduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export type ProductsParams = {
  limit: number;
  offset: number;
};

export interface IProductsService {
  getAll(params: ProductsParams): Promise<IProduct[]>;
  getByID(userId: IProduct["id"]): Promise<IProduct | undefined>
  create(product: CreateProductDto): Promise<IProduct>;
  update(userId: IProduct["id"], updateProduct: CreateProductDto): Promise<UpdatedProductDto>;
  delete(userId: IProduct["id"]): Promise<void>;
}
