import axios from 'axios';

import type { AchieveType } from '../types/locationType/achievesType';

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
}

export default AchieveService;
