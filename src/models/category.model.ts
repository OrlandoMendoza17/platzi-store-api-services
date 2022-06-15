import { CreateCategoryDto } from "../dtos/category.dto";
import { IProduct, ProductsParams } from "./product.model";

export interface ICategory {
  id: number;
  name: string;
  image: string;
}

export interface ICategoryService {
  getAll(limit: number): Promise<ICategory[]>
  create(newCategory: CreateCategoryDto): Promise<ICategory>
  getById(categoryId: ICategory["id"]): Promise<ICategory>
  update(categoryId: ICategory["id"], categoryInfo: CreateCategoryDto): Promise<ICategory>
  getProductsById(categoryId: ICategory["id"], params: ProductsParams): Promise<IProduct[]>
}