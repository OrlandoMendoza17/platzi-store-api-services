import { AuthCredentialsDto } from "../dtos/auth.dto";
import { IUser } from "./user.model";

export type Token = {
  access_token: string,
}

export interface IAuthService {
  login(credentials: AuthCredentialsDto): Promise<string>
  profile(access_token: string): Promise<IUser>
}