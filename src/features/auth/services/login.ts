import {USERNAME, PASSWORD, TOKEN_RESPONSE} from '@env';
import {DataLogin, LoginApiResponse} from '../models';

export const loginService = async ({
  email,
  password,
}: DataLogin): Promise<LoginApiResponse> => {
  if (email === USERNAME && password === PASSWORD) {
    return Promise.resolve({
      token: TOKEN_RESPONSE,
      email,
    });
  }
  return Promise.reject('username or password are incorrect.');
};
