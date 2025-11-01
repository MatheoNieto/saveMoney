import {StackPrivateDefinitions} from './types';
import {HomeStack} from '@features/home';

export const routes = {
  [StackPrivateDefinitions.HOME]: {
    name: StackPrivateDefinitions.HOME,
    component: HomeStack,
  },
} as const;
