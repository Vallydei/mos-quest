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
  static async updateUser(data: SignupFormData): Promise<UserType> {
    console.log('----------->', data.get('avatar'));
    
    const response = await userInstance.post<UserType>(`/api/users/1`, data, {
      headers: {
        "Content-Type": 'multipart/form-data'
      }
    });
    return response.data;
  }
}

export default UserService;
