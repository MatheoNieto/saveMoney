import {CustomFonts} from '@theme/constants';

const textVariants = {
  defaults: {
    color: 'black',
    fontFamily: CustomFonts.Primary,
    letterSpacing: 0.049,
    fontSize: 14,
  },
  errorFieldForm: {
    fontWeight: '500',
    fontSize: 8,
    lineHeight: 14,
    textTransform: 'uppercase',
    color: 'error',
  },
  regular: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
  },
  labelField: {
    color: 'black',
  },
};

export default textVariants;
