import { User, UserResponse } from './User';

export interface Specialist {
  id: number;
  userId: number;
  companyName?: string;
  description?: string;
  experienceYears?: number;
  rating: number;
  servicesOffered?: string[];
  licenseNumber?: string;
  isVerified: boolean;
  latitude?: number;
  longitude?: number;
  address?: string;
  contactPhone?: string;
  createdAt: string;
  user?: UserResponse;
}

export interface SpecialistCreate {
  userId: number;
  companyName?: string;
  description?: string;
  experienceYears?: number;
  servicesOffered?: string[];
  licenseNumber?: string;
  latitude?: number;
  longitude?: number;
  address?: string;
  contactPhone?: string;
}