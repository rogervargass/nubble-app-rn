import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsAPI {
  auth: {
    type: string;
    token: string;
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
