import themeCore from '@theme/theme.core';

const lightTheme = {
  ...themeCore,
  dark: false,
};

export type LightTheme = typeof lightTheme;

export default lightTheme;
