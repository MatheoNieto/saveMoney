import {createAction} from '@reduxjs/toolkit';
import {LoginApiResponse} from '../models';

export const authActions = {
  signIn: createAction<{data: LoginApiResponse}>('auth/login'),
};
