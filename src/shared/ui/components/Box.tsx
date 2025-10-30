import React from 'react';
import {Animated, StyleProp, View, ViewStyle} from 'react-native';
import {
  BoxProps as ShopifyRestyleBoxProps,
  boxRestyleFunctions,
  composeRestyleFunctions,
} from '@shopify/restyle';
import {useAppRestyle} from '@theme';
import {useAsProp} from '@ui/hooks';
import {forwardRef} from '@ui/utils';

import type {Theme} from '@theme';
import type {Animation} from 'react-native-animatable';

// ✅ Base Restyle props with animated style support
type RestyleBoxProps = ShopifyRestyleBoxProps<Theme> & {
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
};

// ✅ Custom props for your Box component
export type BoxCustomProps = {
  _dark?: RestyleBoxProps;
  _light?: RestyleBoxProps;
  onPress?: (() => Promise<any> | void) | null;
  disabled?: boolean;
  animation?:
    | Animation
    | Record<number, Record<string, Record<string, number>[]>>;
  value?: React.ReactElement | string;
  useNativeDriver?: boolean;
  duration?: number;
  isDisabled?: boolean | string;
  delay?: number;
  easing?: string;
  onLongPress?: (() => Promise<any> | void) | null;
  to?: any;
  loanId?: string;
};

// ✅ Merge Restyle props + custom props
export type BoxProps = RestyleBoxProps &
  BoxCustomProps & {
    as?: React.ElementType;
  };

// ✅ Compose restyle functions
const restyleFunctions = composeRestyleFunctions(boxRestyleFunctions);

// ✅ ForwardRef with proper typing
const Box = forwardRef<View, BoxProps>(({as, _dark, _light, ...rest}, ref) => {
  const BoxComponent = useAsProp(View, as);
  const props = useAppRestyle(restyleFunctions, {...rest, ..._light});

  return <BoxComponent ref={ref} {...props} />;
});

export default Box;
