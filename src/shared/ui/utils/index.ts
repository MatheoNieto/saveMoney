// TODO: refactor  nocheck
// @ts-nocheck
import {RightJoinProps, PropsOf, As} from '@ui/types';
import React from 'react';

export const forwardRef = <Props extends object, Component extends As>(
  component: React.ForwardRefRenderFunction<
    any,
    RightJoinProps<PropsOf<Component>, Props> & {
      as?: As;
    }
  >,
) => React.forwardRef(component);

export const getCustomFontFamily = (
  fontFamily?: string,
  fontWeight: FontWeight = 'normal',
) =>
  fontFamily && CustomFonts[fontFamily as CustomFonts]
    ? `${fontFamily}${FONT_WEIGHT_MAPPING[fontWeight] ?? ''}`
    : undefined;
