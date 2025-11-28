import { api } from './config';
import { Client, ClientCreate } from '../../types/Client';

export const clientAPI = {
  getClients: async (): Promise<Client[]> => {
    const response = await api.get('/clients/');
    return response.data;
  },

  getClient: async (id: number): Promise<Client> => {
    const response = await api.get(`/clients/${id}`);
    return response.data;
  },

  getNearbyClients: async (lat: number, lng: number, radiusKm: number = 10): Promise<Client[]> => {
    const response = await api.get('/clients/nearby/', {
      params: { lat, lng, radius_km: radiusKm }
    });
    return response.data;
  },

  createClient: async (clientData: ClientCreate): Promise<Client> => {
    const response = await api.post('/clients/', clientData);
    return response.data;
  },
};