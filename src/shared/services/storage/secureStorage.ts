import {MMKVLoader} from 'react-native-mmkv-storage';

export const secureStorage = new MMKVLoader()
  .withInstanceID('fl-secure-storage')
  .withEncryption()
  .initialize();
