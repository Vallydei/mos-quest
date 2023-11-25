import axios from 'axios';
import type { BackendAuth, LoginFormData, SignupFormData } from '../types/auth';

export const locationInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class LocationService {
  static async refresh(): Promise<BackendAuth> {
    const response = await authInstance.get<BackendAuth>('/tokens/refresh');
    return response.data;
  }

  static async login(formData: LoginFormData): Promise<BackendAuth> {
    const response = await authInstance.post<BackendAuth>('/auth/login', formData);
    return response.data;
  }

  static async signup(formData: SignupFormData): Promise<BackendAuth> {
    console.log(formData);
    
    const response = await authInstance.post<BackendAuth>('/auth/signup', formData);
    return response.data;
  }

  static async logout(): Promise<void> {
    return authInstance.post('/auth/logout');
  }

  static async check(): Promise<BackendAuth> {
    const response = await authInstance.get<BackendAuth>('/auth/check');
    return response.data;
  }
}

export default LocationService;
