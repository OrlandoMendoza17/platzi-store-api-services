import { ICategory } from "../models/category.model";

export type CreateCategoryDto = Omit<ICategory, "id">