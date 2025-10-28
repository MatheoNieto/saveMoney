import {AuthStack} from '@features/auth';
import {StackPublicDefinitions} from './types';

export const routes = {
  [StackPublicDefinitions.AUTH]: {
    name: StackPublicDefinitions.AUTH,
    component: AuthStack,
  },
} as const;
