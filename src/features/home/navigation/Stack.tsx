import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeRoutes} from './routes';
import {HomeParamsList} from './types';
import {HomeScreen} from '../screens';

const HomeStack = () => {
  const {Navigator, Screen} = createStackNavigator<HomeParamsList>();
  return (
    <Navigator initialRouteName={HomeRoutes.HOME}>
      <Screen
        name={HomeRoutes.HOME}
        component={HomeScreen}
        options={{
          header: () => null,
        }}
      />
    </Navigator>
  );
};

export default HomeStack;
