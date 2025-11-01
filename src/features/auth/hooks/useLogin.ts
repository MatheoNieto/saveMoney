import {useMutation} from '@tanstack/react-query';
import {loginService} from '../services';
import {DataLogin} from '../models';

export const useLogin = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: string) => void;
  onError: (error: any) => void;
}) => {
  return useMutation<string, void, DataLogin>({
    mutationFn: loginService,
    onSuccess,
    onError,
  });
};
