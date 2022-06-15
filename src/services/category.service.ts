import API from "../api";
import { CreateCategoryDto } from "../dtos/category.dto";
import { ICategory, ICategoryService } from "../models/category.model";
import { ProductsParams, IProduct } from "../models/product.model";

const API_URL = "/categories";

class CategoryService implements ICategoryService {
  async getAll(limit: number) {
    const config = { params: { limit } }
    
    const { data: categories } = await API.get<ICategory[]>(API_URL, config);
    return categories;
  }
  
  async create(newCategory: CreateCategoryDto) {
    const { data: category } = await API.post<ICategory>(API_URL, newCategory);
    return category;
  }
  
  async getById(categoryId: ICategory["id"]) {
    const { data: category } = await API.get<ICategory>(`${API_URL}/${categoryId}`);
    return category;
  }
  
  async update(categoryId: ICategory["id"], categoryInfo: CreateCategoryDto) {
    const { data: updatedCategory } = await API.put<ICategory>(`${API_URL}/${categoryId}`, categoryInfo);
    return updatedCategory;
  }
  
  async getProductsById(categoryId: ICategory["id"], params: ProductsParams) {
    const { data: products } = await API.get<IProduct[]>(`${API_URL}/${categoryId}/products`, { params });
    return products;
  }
}

export default CategoryService;
