import { IProduct } from "../models/product.model";

export interface CreateProductDto extends Omit<IProduct, "id" | "category">{
  categoryId: number,
}

export interface UpdatedProductDto extends IProduct{
  categoryId: number,
}