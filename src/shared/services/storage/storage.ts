import {MMKVLoader, useIndex, useMMKVStorage} from 'react-native-mmkv-storage';

export const storage = new MMKVLoader()
  .withInstanceID('fl-storage')
  .initialize();

export {useIndex, useMMKVStorage};
