import ProductsService from "./services/product.service";

(async () => {
  const productsAPI = new ProductsService();
  try {
    const products = await productsAPI.getAll({ limit: 10, offset: 0 });
    console.log(products.map((product) => product.title));

    // const newProduct = await productsAPI.create({
    //   title: "Nuevo producto de Orlando",
    //   categoryId: 3,
    //   price: 1000,
    //   description: "Producto hecho desde practica de typescript",
    //   images: [""]
    // })
    // console.log("newProduct:", newProduct)

    const userId = 100;

    // const updatedProduct = await productsAPI.update(userId, {
    //   title: "Producto actualizado de Orlando",
    //   categoryId: 5,
    //   price: 1000,
    //   description: "Producto hecho desde practica de typescript, actualizado",
    //   images: [
    //     "https://upload.wikimedia.org/wikipedia/commons/3/32/Platzi.jpg",
    //   ],
    // });

    // console.log("updatedProduct:", updatedProduct);
    
    // await productsAPI.delete(userId)
    
    // console.log(`Producto ${userId} eliminado`)
    
    const foundProduct = await productsAPI.getByID(userId)
    console.log("foundProduct:", foundProduct)
    
  } catch (error: any) {
    console.log(error, error?.message)
  }
})();
