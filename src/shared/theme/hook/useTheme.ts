import {storage, useMMKVStorage} from '@services/storage/storage';
import {ThemeOptions} from '@theme/types';

const useTheme = () => useMMKVStorage<ThemeOptions>('Theme', storage, 'System');

export default useTheme;
