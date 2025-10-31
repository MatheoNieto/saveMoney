import * as yup from 'yup';

export enum formKeys {
  EMAIL = 'email',
  PASSWORD = 'password',
}

export const schemaLogin = yup.object({
  [formKeys.EMAIL]: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  [formKeys.PASSWORD]: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
