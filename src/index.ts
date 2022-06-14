import ProductsService from "./services/product.service";

(async () => {
  const productsAPI = new ProductsService();

  const products = await productsAPI.getAll({ limit: 10, offset: 0 });

  console.log(products.map((product) => product.title));
})();
