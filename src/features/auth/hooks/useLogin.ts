import {useMutation} from '@tanstack/react-query';
import {loginService} from '../services';
import {DataLogin, LoginApiResponse} from '../models';

export const useLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: LoginApiResponse) => void;
  onError: (error: any) => void;
}) => {
  return useMutation<LoginApiResponse, void, DataLogin>({
    mutationFn: loginService,
    onSuccess,
    onError,
  });
};
