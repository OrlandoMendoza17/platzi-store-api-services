import { ICategory } from "./category.model";

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export type productsParams = {
  limit: number;
  offset: number;
};

export interface IProductsService {
  getAll(params: productsParams): Promise<IProduct[]>;
  create(): Promise<void>;
  update(): Promise<void>;
  delete(): Promise<void>;
}
