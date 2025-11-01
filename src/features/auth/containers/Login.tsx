import {Box, Text} from '@ui/components';
import React from 'react';
import {LoginForm} from '../components/FormLogin';
import {useLogin} from '../hooks/useLogin';
import {LoginFormValues} from '../models';

const LoginContainer = () => {
  const {mutate: doLogin, isPending} = useLogin({
    onSuccess: data => {
      console.log('SUCCESS===<', data);
    },
    onError: () => {},
  });
  const onSubmit = (values: LoginFormValues) => {
    doLogin(values);
  };

  return (
    <Box p="m" mt="3xl">
      <Text variant="head">Login</Text>
      <LoginForm onSubmit={onSubmit} loading={isPending} />
    </Box>
  );
};

export default LoginContainer;
