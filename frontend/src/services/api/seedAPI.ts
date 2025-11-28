import { api } from './config';

export const seedAPI = {
  createTestData: async (): Promise<{ message: string; data: any }> => {
    const response = await api.post('/seed/test-data');
    return response.data;
  },

  deleteTestData: async (): Promise<{ message: string }> => {
    const response = await api.delete('/seed/test-data');
    return response.data;
  },
};