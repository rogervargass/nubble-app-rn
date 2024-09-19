import {api} from '@api';

import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials, SignUpData} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authCredentials = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authCredentials);
  } catch (error) {
    throw new Error('email ou senha inválidos');
  }
}

async function signOut(): Promise<string> {
  const message = await authApi.signOut();
  return message;
}

async function signUp(data: SignUpData): Promise<void> {
  await authApi.signUp(data);
}

function updateToken(token: string) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function removeToken() {
  api.defaults.headers.common.Authorization = null;
}

export const authService = {
  signIn,
  signOut,
  signUp,
  updateToken,
  removeToken,
};
