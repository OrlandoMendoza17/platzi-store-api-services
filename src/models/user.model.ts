import { CreateUserDto } from "../dtos/user.dto"

export enum ROLE {
  ADMIN = "admin",
  CUSTOMER = "customer"
}

export type IUser = {
  id: number,
  email: string,
  password: string,
  name: string,
  role: ROLE,
  avatar: string
}

export type IsAvailable = {
  isAvailable: boolean
}

export interface IUserService {
  
  getAll(limit: number): Promise<IUser[]>
  
  create(newUser: CreateUserDto): Promise<IUser>
  
  isAvailable(email: IUser["email"]): Promise<IsAvailable>
  
}
