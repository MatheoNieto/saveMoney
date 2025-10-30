import {CustomFonts, FONT_WEIGHT_MAPPING} from '@theme/constants';
import {FontWeight} from '@theme/types';

export const getCustomFontFamily = (
  fontFamily: CustomFonts = CustomFonts.Primary,
  fontWeight: FontWeight = 'normal',
): string | undefined => {
  const weightSuffix = FONT_WEIGHT_MAPPING[fontWeight] ?? '';
  return fontFamily ? `${fontFamily}${weightSuffix}` : undefined;
};
