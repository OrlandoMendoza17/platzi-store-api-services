import API from "../api";
import { AuthCredentialsDto } from "../dtos/auth.dto";
import { IAuthService, Token } from "../models/auth.model";
import { IUser } from "../models/user.model";

const API_URL = "/auth"

class AuthService implements IAuthService{
  
  async login(credentials: AuthCredentialsDto) {
    const { data: { access_token } } = await API.post<Token>(`${API_URL}/login`, credentials)
    return access_token;
  }
  
  async profile(access_token: string) {
    API.defaults.headers.common["Authorization"] = `Bearer ${access_token}`
    const { data: user } = await API.get<IUser>(`${API_URL}/profile`)
    return user;
  }
}

export default AuthService;