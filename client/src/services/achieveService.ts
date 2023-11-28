import axios from 'axios';

import type { AchieveType } from '../types/locationType/achievesType';
import type { UserType } from '../types/auth';

export const achieveInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class AchieveService {
  static async getAll(): Promise<AchieveType[]> {
    const response = await achieveInstance.get<AchieveType[]>('/api/achieves');

    return response.data;
  }

  static async addNewUserAchiv(data: AchieveType['id']): Promise<AchieveType> {
    const response = await achieveInstance.post<AchieveType>('/api/achieves', data);
    return response.data;
  }

  static async getAllUserAchiv(id: UserType['id']): Promise<AchieveType[]> {
    const response = await achieveInstance.get<AchieveType[]>(`/api/achieves/${id}`);
    return response.data;
  }
}

export default AchieveService;
