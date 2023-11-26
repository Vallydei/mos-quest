import axios from 'axios';
import type { ProgressType, ProgressTypeData } from '../types/progressType/progressType';
import type { UserType } from '../types/auth';

export const progressInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class ProgressService {
  static async getAllProgress(id: UserType['id']): Promise<ProgressType[]> {
    const response = await progressInstance.get<ProgressType[]>(`/api/progress/${id}`);
    return response.data;
  }

  static async createNewProgress(data: ProgressTypeData): Promise<ProgressType> {
    const response = await progressInstance.post<ProgressType>('/api/progress', data);
    return response.data;
  }
}

export default ProgressService;
