import themeCore from '@theme/theme.core';

const darkTheme = {
  ...themeCore,
  dark: true,
};

export type DarkTheme = typeof darkTheme;

export default darkTheme;
