import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import FieldInput from '@components/form/FieldInput';
import {formKeys, schemaLogin} from '../constants';
import {Box, Button} from '@ui/components';
import {LoginFormValues} from '../models';

type Props = {
  onSubmit: (values: LoginFormValues) => void;
  loading?: boolean;
};

export const LoginForm: React.FC<Props> = ({onSubmit, loading}) => {
  const {
    control,
    handleSubmit,
    formState: {isValid, errors},
  } = useForm<LoginFormValues>({
    resolver: yupResolver(schemaLogin),
    mode: 'onChange',
  });

  return (
    <Box>
      <FieldInput
        name={formKeys.EMAIL}
        control={control}
        label="Email"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <FieldInput
        name={formKeys.PASSWORD}
        control={control}
        label="Password"
        secureTextEntry
      />
      <Button
        variant="solid"
        disabled={!isValid || loading}
        isLoading={loading}
        onPress={handleSubmit(
          data => {
            onSubmit(data);
          },
          errors => {
            console.log('Validation errors:', errors);
          },
        )}>
        Login
      </Button>
    </Box>
  );
};
