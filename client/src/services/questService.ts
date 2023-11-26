import axios from 'axios';
import type { QuestType } from '../types/questType/questType';

export const locationInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class QuestService {
  static async getAllQuests(): Promise<QuestType[]> {
    const response = await locationInstance.get<QuestType[]>('/api/quest');
    return response.data;
  }
}

export default QuestService;
