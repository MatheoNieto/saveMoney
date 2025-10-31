import {useIsDarkMode} from '@theme/hooks';
import {Theme} from '@theme/index';

export default function useColorModeValue<
  T = Theme['colors'] | Theme['spacing'] | number | string,
>(optionA: T, optionB: T) {
  const isDarkMode = useIsDarkMode();
  return !isDarkMode ? optionA : optionB;
}
