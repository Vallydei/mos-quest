import axios from 'axios';
import type { CommentFormType, CommentType, LocationType } from '../types/locationType/locationType';

export const locationInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

class LocationService {
  static async getAll(): Promise<LocationType[]> {
    const response = await locationInstance.get<LocationType[]>('/api/location');

    return response.data;
  }

  static async getAllComments(): Promise<CommentType[]> {
    const response = await locationInstance.get<CommentType[]>('/api/comments');
    return response.data;
  }

  static async postComment(comment: CommentFormType): Promise<CommentType> {
    const response = await locationInstance.post<CommentType>('/api/comments/', comment );
    return response.data;
  }


}

export default LocationService;
