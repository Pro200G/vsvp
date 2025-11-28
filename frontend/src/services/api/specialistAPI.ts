import { api } from './config';
import { Specialist, SpecialistCreate } from '../../types/Specialist';

export const specialistAPI = {
  getSpecialists: async (): Promise<Specialist[]> => {
    const response = await api.get('/specialists/');
    return response.data;
  },

  getSpecialist: async (id: number): Promise<Specialist> => {
    const response = await api.get(`/specialists/${id}`);
    return response.data;
  },

  getNearbySpecialists: async (lat: number, lng: number, radiusKm: number = 10): Promise<Specialist[]> => {
    const response = await api.get('/specialists/nearby/', {
      params: { lat, lng, radius_km: radiusKm }
    });
    return response.data;
  },

  createSpecialist: async (specialistData: SpecialistCreate): Promise<Specialist> => {
    const response = await api.post('/specialists/', specialistData);
    return response.data;
  },
};