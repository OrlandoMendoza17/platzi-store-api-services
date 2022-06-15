import { ROLE } from "./models/user.model"
import UserService from "./services/user.service"

(async ()=>{
  const { ADMIN } = ROLE
  
  const userAPI =  new UserService()
  
  const users = await userAPI.getAll(20)
  
  console.log(users.map(user => user.email))
  
  const user = await userAPI.create({
    email: "ommv.17@hotmail.com",
    name: "Orlando Mendoza",
    password: "27313279",
    role: ADMIN,
    avatar: "https://cdn.resfu.com/media/img_news/cristiano--delantero-del-real-madrid--twitter.jpg?size=1000x&lossy=1"
  })
  
  console.log(user)
  
})()