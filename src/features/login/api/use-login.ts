import { api } from '@shared/api';
import { useUserData } from '@shared/store/user-data';
import { useNotification } from '@shared/ui/notification';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useLogin = () => {
  const { setIsAuthorized } = useUserData();
  const { showNotification } = useNotification();

  return useMutation({
    mutationFn: (params: { phone: string; code: string }) =>
      api.identity.authControllerAuthByPhone(params),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      setIsAuthorized(true);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        showNotification(error.response?.data.message);
      }
    },
  });
};
