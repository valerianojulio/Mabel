export interface User {
  id: string;
  email: string;
  passwordHash: string; // Na prática, nunca guarde senhas em plain text
  name: string;
  isVerified: boolean;
  verificationCode?: string;
  createdAt: string;
}

export interface Domain {
  id: string;
  userId: string;
  subdomain: string; // ex: 'meuprojeto'
  fullUrl: string;   // ex: 'meuprojeto.mabel.app'
  createdAt: string;
  status: 'active' | 'pending';
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface ApiError {
  message: string;
}

// Estados possíveis para o contexto de autenticação
export enum AuthStatus {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  AUTHENTICATED = 'AUTHENTICATED',
  UNAUTHENTICATED = 'UNAUTHENTICATED'
}