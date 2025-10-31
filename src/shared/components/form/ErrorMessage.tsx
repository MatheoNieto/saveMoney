import React from 'react';

import {Text, TextProps} from '@ui/components';

type Props = TextProps & {children: string | number | undefined};

const ErrorMessage = ({children: errorMessage, ...rest}: Props) => (
  <Text variant="errorFieldForm" ml="m" mt="xs" {...rest}>
    {errorMessage}
  </Text>
);

export default ErrorMessage;
