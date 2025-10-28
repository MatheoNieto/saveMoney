import {StackNavigationProp} from '@react-navigation/stack';
import {AuthRoutes} from './routes';

export type AuthParamsList = {
  [AuthRoutes.LOGIN]: undefined;
  [AuthRoutes.REGISTER]: undefined;
};

export type AuthStackProps = StackNavigationProp<AuthParamsList>;
