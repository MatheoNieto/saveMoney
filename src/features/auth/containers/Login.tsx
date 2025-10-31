import {Box, Text} from '@ui/components';
import React from 'react';
import {LoginForm} from '../components/FormLogin';

const LoginContainer = () => {
  const onSubmit = (values: any) => {
    console.log('===> login container submit', JSON.stringify(values, null, 2));
  };

  return (
    <Box p="m">
      <Text variant="head">Login</Text>
      <LoginForm onSubmit={onSubmit} />
    </Box>
  );
};

export default LoginContainer;
