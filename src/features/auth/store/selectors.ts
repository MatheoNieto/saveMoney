import {createDraftSafeSelector, createSelector} from '@reduxjs/toolkit';
import {RootState} from '@store';
const authSelector = (state: RootState) => state.auth;

const getAuthData = createDraftSafeSelector(authSelector, state => ({
  token: state.token,
  email: state.email,
}));
export const isAuthenticatedSelector = createSelector([getAuthData], authData =>
  Boolean(authData.token),
);
