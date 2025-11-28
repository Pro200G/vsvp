import { UserResponse } from './User';

export interface Client {
  id: number;
  userId: number;
  address?: string;
  contactPhone?: string;
  latitude?: number;
  longitude?: number;
  budgetRange?: string;
  projectDescription?: string;
  createdAt: string;
  user?: UserResponse;
}

export interface ClientCreate {
  userId: number;
  address?: string;
  contactPhone?: string;
  latitude?: number;
  longitude?: number;
  budgetRange?: string;
  projectDescription?: string;
}