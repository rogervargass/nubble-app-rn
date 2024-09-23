import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string;
    token: string;
    refreshToken: string;
    expires_at: string;
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignUpData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ForgotPasswordParam {
  email: string;
}
