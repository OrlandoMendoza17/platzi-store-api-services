import { IUser } from "../models/user.model";

export type CreateUserDto = Omit<IUser, "id">