import { api } from './config';
import { User, UserCreate, UserResponse } from '../../types/User';

export const userAPI = {
  // Users
  getUsers: async (): Promise<UserResponse[]> => {
    const response = await api.get('/users/');
    return response.data;
  },

  getUser: async (id: number): Promise<UserResponse> => {
    const response = await api.get(`/users/${id}`);
    return response.data;
  },

  createUser: async (userData: UserCreate): Promise<UserResponse> => {
    const response = await api.post('/users/', userData);
    return response.data;
  },
};