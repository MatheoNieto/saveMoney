import {StackPublicDefinitions} from './types';
// TODO: ERROR AUTH STACK
export const routes = {
  [StackPublicDefinitions.AUTH]: {
    name: StackPublicDefinitions.AUTH,
    component: AuthStack,
  },
} as const;
