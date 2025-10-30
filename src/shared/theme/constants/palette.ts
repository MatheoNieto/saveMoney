const palette = {
  black: '#000',
  white: '#ffffff',
  base: {
    0: '#FFFFFF',
    25: '#F8F8FF',
    50: '#E6E6F5',
    100: '#CACBDE',
    200: '#9596B3',
    300: '#7B7C97',
    400: '#5F6076',
    500: '#46475A',
    700: '#252631',
    800: '#1B1C24',
    900: '#111217',
  },
  navDrop: {
    light: 'rgba(17, 18, 23, 0.15)',
    dark: 'rgba(0, 0, 0, 0.25)',
  },
  primary: {
    100: '#BFCCFF',
    300: '#7B8DDE',
    400: '#5B73D7',
    500: '#3356D7',
    700: '#2A46B9',
    900: '#1C2A9A',
  },
  // ERRORS
  error: {
    200: '#F0B0A1',
    400: '#EE3F22',
    500: '#CC1E00',
  },
} as const;

export default palette;
