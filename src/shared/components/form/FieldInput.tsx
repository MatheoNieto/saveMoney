import React, {forwardRef, memo, useCallback} from 'react';
import {
  NativeSyntheticEvent,
  StyleProp,
  TextInputFocusEventData,
  TextStyle,
} from 'react-native';
import {useAppRestyle} from '@theme';
import {useController, UseControllerProps} from 'react-hook-form';
import {Box, Input} from '@ui/components';
import {restyleFunctionsField} from './constants';
import ErrorMessage from './ErrorMessage';
import type {BoxProps, InputProps} from '@ui/components';
import type {ComponentWithAs} from '@ui/types';

export type Props = InputProps & {
  suffix?: string;
  label?: string;
  styleInput?: StyleProp<TextStyle>;
  styleContent?: StyleProp<TextStyle>;
  boxProps?: BoxProps;
} & UseControllerProps<any>;

const FieldInput = forwardRef<typeof Input, Props>(
  (
    {
      name,
      control,
      rules,
      defaultValue = '',
      shouldUnregister,
      onBlur,
      onChangeText,
      styleInput,
      styleContent,
      isClearButtonModeIcon = 'while-editing',
      boxProps,
      ...rest
    },
    ref,
  ) => {
    const {
      field,
      fieldState: {error, isTouched},
    } = useController({
      name,
      control,
      rules,
      defaultValue,
      shouldUnregister,
    });

    const {style: containerStyle = {}, ...passedProps} = useAppRestyle(
      restyleFunctionsField,
      rest,
    );

    const isInvalid = Boolean(error && isTouched);

    const handleBlur = useCallback(
      (ev: NativeSyntheticEvent<TextInputFocusEventData>) => {
        onBlur?.(ev);
        field.onBlur();
      },
      [onBlur, field],
    );

    const handleChangeText = useCallback(
      (text: string) => {
        onChangeText?.(text);
        field.onChange(text);
      },
      [onChangeText, field],
    );

    return (
      <Box {...boxProps} style={[containerStyle]}>
        <Input
          variant={rest.multiline ? 'area' : undefined}
          ref={ref}
          style={styleInput}
          name={name}
          onBlur={handleBlur}
          onChangeText={handleChangeText}
          value={field.value}
          isInvalid={isInvalid}
          clearButtonMode={isClearButtonModeIcon}
          styleContent={styleContent}
          {...passedProps}
        />
        {isInvalid && <ErrorMessage>{error?.message}</ErrorMessage>}
      </Box>
    );
  },
);

export default memo(FieldInput) as ComponentWithAs<typeof Input, Props>;
