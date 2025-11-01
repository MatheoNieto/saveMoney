import {Box, Text} from '@ui/components';
import React from 'react';
import {LoginForm} from '../components/FormLogin';
import {useLogin} from '../hooks/useLogin';

const LoginContainer = () => {
  const {mutate: doLogin, isPending} = useLogin({
    onSuccess: () => {},
    onError: () => {},
  });
  const onSubmit = (values: any) => {
    console.log('===> login container submit', JSON.stringify(values, null, 2));
  };

  return (
    <Box p="m" mt="3xl">
      <Text variant="head">Login</Text>
      <LoginForm onSubmit={onSubmit} />
    </Box>
  );
};

export default LoginContainer;
