import API from "../api";
import { CreateUserDto } from "../dtos/user.dto";
import { IsAvailable, IUserService, IUser } from "../models/user.model";

const API_URL = "/USERS";

class UserService implements IUserService {
  async getAll(limit: number) {
    const config = { params: { limit } }
    
    const { data: users } = await API.get<IUser[]>(API_URL, config);
    return users;
  }

  async create(newUser: CreateUserDto) {
    const { data: user } = await API.post<IUser>(API_URL, { ...newUser });
    return user;
  }

  async isAvailable(email: IUser["email"]) {
    const { data: isAvailable } = await API.post<IsAvailable>(`${API_URL}/is-available`, { email });
    return isAvailable;
  }
}

export default UserService;
