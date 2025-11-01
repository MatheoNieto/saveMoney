import {formKeys} from '../constants';

export type DataLogin = {
  email: string;
  password: string;
};

export type LoginFormValues = {
  [formKeys.EMAIL]: string;
  [formKeys.PASSWORD]: string;
};

export * from './response';
