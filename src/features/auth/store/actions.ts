import {createAction} from '@reduxjs/toolkit';

export const actions = {
  // TODO: replace 'any' with proper type
  signIn: createAction<{data: any}>('auth/login'),
};
