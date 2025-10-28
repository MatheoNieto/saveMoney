import {createReducer} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import {actions} from './actions';
import {persistConfigAuth} from 'src/store/config';

type AUTH_STATE_TYPE = {
  api_key: string | undefined;
  isAuthenticated: boolean;
};

const INITIAL_STATE: AUTH_STATE_TYPE = {
  api_key: undefined,
  isAuthenticated: false,
};

const authReducer = createReducer(INITIAL_STATE, builder => {
  builder.addCase(actions.signIn, (state, action) => {
    const {data} = action.payload;
    state.isAuthenticated = !!data.api_key;
    state.api_key = data.api_key;
  });
});

export type AuthenticationState = ReturnType<typeof authReducer>;

const persistAuthReducer = persistReducer<AuthenticationState>(
  persistConfigAuth,
  authReducer,
);

export default persistAuthReducer;
