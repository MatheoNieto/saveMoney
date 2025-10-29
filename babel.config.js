module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@assets': './assets',
          '@features': './src/features',
          '@ui': './src/shared/ui',
          '@components': './src/shared/components',
          '@navigators': './src/shared/navigators',
          '@routes': './src/shared/routes',
          '@services': './src/shared/services',
          '@theme': './src/shared/theme',
          '@config': './src/config',
          '@store': './src/store',
        },
      },
    ],
  ],
};
