import {createTheme} from '@shopify/restyle';
import {palette} from '@theme/constants';
import {
  textVariants,
  buttonVariants,
  cardVariants,
  inputVariants,
} from './variants';

const theme = createTheme({
  colors: {
    base100: palette.base[100],
    primary100: palette.primary[100],
    black: palette.black,
    white: palette.white,
    error: palette.error[500],
    inputBorder: palette.base[500],
    lightGray: palette.base[100],
    disabled: palette.base[100],
    input: palette.base[0],
  },
  spacing: {
    unset: 0,
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
    '5xl': 128,
    '6xl': 256,
  },
  borderRadius: {
    unset: 0,
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
  },
  breakpoints: {
    phone: 0,
  },
  zIndices: {},
  textVariants: textVariants,
  buttonVariants: buttonVariants,
  cardVariants: cardVariants,
  inputVariants: inputVariants,
});

export type ThemeCore = typeof theme;

export default theme;
