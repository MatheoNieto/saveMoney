import {Box, Text} from '@ui/components';
import React from 'react';
import {LoginForm} from '../components/FormLogin';
import {useLogin} from '../hooks/useLogin';
import {LoginFormValues} from '../models';
import {Alert} from 'react-native';
import {useAppDispatch} from '@hooks/useStore';
import {authActions} from '../store';

const LoginContainer = () => {
  const dispatch = useAppDispatch();

  const {mutate: doLogin, isPending} = useLogin({
    onSuccess: data => {
      console.log('SUCCESS===<', data);
      dispatch(authActions.signIn({data}));
    },
    onError: error => {
      Alert.alert(error);
    },
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
