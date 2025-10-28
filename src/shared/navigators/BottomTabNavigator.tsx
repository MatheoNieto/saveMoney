import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {RouteProp, ParamListBase} from '@react-navigation/native';

type Route = {
  name: string;
  component: React.ComponentType<any>;
  options?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase>;
        navigation: any;
      }) => BottomTabNavigationOptions);
};

type Props = {
  initialRouteName?: string;
  routes?: Route[];
  screenOptions?:
    | BottomTabNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase>;
        navigation: any;
      }) => BottomTabNavigationOptions);
  tabBar?: (props: any) => React.ReactNode;
};

const BottomTab = createBottomTabNavigator();

export const BottomTabNavigator: React.FC<Props> = ({
  initialRouteName,
  routes,
  ...props
}) => {
  return (
    <BottomTab.Navigator initialRouteName={initialRouteName} {...props}>
      {routes?.map((route, index) => (
        <BottomTab.Screen
          key={index}
          name={route.name}
          component={route.component}
        />
      ))}
    </BottomTab.Navigator>
  );
};
