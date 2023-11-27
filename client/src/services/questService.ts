import axios from 'axios';
import type { QuestType } from '../types/questType/questType';

export const questInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class QuestService {
  static async getAllQuests(): Promise<QuestType[]> {
    const response = await questInstance.get<QuestType[]>('/api/quest');
    return response.data;
  }
}

export default QuestService;
