import {createStackNavigator} from '@react-navigation/stack';
import {AuthRoutes} from './routes';
import {AuthParamsList} from './types';
import {LoginScreen, RegisterScreen} from '../screens';

const AuthStack = () => {
  const {Navigator, Screen} = createStackNavigator<AuthParamsList>();
  return (
    <Navigator initialRouteName={AuthRoutes.LOGIN}>
      <Screen name={AuthRoutes.LOGIN} component={LoginScreen} />
      <Screen name={AuthRoutes.REGISTER} component={RegisterScreen} />
    </Navigator>
  );
};

export default AuthStack;
