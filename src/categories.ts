import CategoryService from "./services/category.service"

(async ()=>{
  const categoryAPI = new CategoryService()
  
  // getAll()

  const categories = await categoryAPI.getAll(10)
  console.log("categories:", categories.map(({id, name}) => ({ id, name })))
  
  // create()
  
  // const newCategory = await categoryAPI.create({
  //   name: 'Movies',
  //   image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=2291'
  // })
  
  // console.log("newCategory:", newCategory)
  
  // update()
  
  const updatedCategory = await categoryAPI.update(3, {
    name: 'Big Shoes',
    image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=2291'
  })
  
  console.log("updatedCategory:", updatedCategory)
  
  // getById()

  const category = await categoryAPI.getById(5)
  console.log("categoryGottenById:", category)
  
  // getProductsById()

  const products = await categoryAPI.getProductsById(5, {limit: 10, offset: 0})
  console.log("products:", products.map(product => product.title))

})()
