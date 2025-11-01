import {createReducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {authActions} from './actions';
import {persistConfigAuth} from '@store/config';

type AUTH_STATE_TYPE = {
  token: string | undefined;
  email: string | undefined;
  isAuthenticated: boolean;
};

const INITIAL_STATE: AUTH_STATE_TYPE = {
  token: undefined,
  email: undefined,
  isAuthenticated: false,
};

const authReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(authActions.signIn, (state, action) => {
    const {data} = action.payload;
    state.isAuthenticated = !!data.token;
    state.token = data.token;
    state.email = data.email;
  });
});

const persistAuthReducer = persistReducer<AuthenticationState>(
  persistConfigAuth,
  authReducer,
);

export type AuthenticationState = ReturnType<typeof authReducer>;
export default persistAuthReducer;
