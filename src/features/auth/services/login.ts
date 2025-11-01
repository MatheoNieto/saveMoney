import {USERNAME, PASSWORD, TOKEN_RESPONSE} from '@env';
import {DataLogin} from '../models';

export const loginService = async ({
  email,
  password,
}: DataLogin): Promise<string> => {
  if (email === USERNAME && password === PASSWORD) {
    return Promise.resolve(TOKEN_RESPONSE);
  }
  return Promise.reject('username or password are incorrect.');
};
