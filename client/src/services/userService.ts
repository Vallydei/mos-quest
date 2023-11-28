import axios from 'axios';
import type { SignupFormData, UserType } from '../types/auth';

export const userInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class UserService {
  static async updateUser(id: UserType['id'], data: SignupFormData): Promise<UserType> {
    const response = await userInstance.post<UserType>(`/api/users/${id}`, data);
    return response.data;
  }
}

export default UserService;
