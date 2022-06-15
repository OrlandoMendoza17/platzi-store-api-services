import { IUser } from "../models/user.model";

export type AuthCredentialsDto = Pick<IUser, "email" | "password">