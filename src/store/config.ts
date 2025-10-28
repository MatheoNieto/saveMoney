import {secureStorage, storage} from '@services/storage';
import {createMigrate, PersistConfig} from 'redux-persist';

const migrate = createMigrate({3: () => undefined, 4: () => undefined});

export const persistConfigAuth: PersistConfig<any> = {
  key: 'auth',
  storage: secureStorage,
  version: 4.02,
  migrate,
};

export const persistConfigRoot: PersistConfig<any> = {
  key: 'root',
  storage: storage,
  version: 4.02,
  migrate,
};
