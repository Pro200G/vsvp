export enum UserRole {
  ADMIN = 'admin',
  SPECIALIST = 'specialist',
  CLIENT = 'client'
}

export interface User {
  id: number;
  email: string;
  fullName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserCreate {
  email: string;
  password: string;
  fullName: string;
  role: UserRole;
  isActive?: boolean;
}

export interface UserResponse {
  id: number;
  email: string;
  fullName: string;
  role: UserRole;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}