import { api } from '@shared/api';
import { useUserData } from '@shared/store/user-data';
import { useNotification } from '@shared/ui/notification';
import { getAxiosErrorText } from '@shared/utils';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const { setIsAuthorized } = useUserData();
  const { showNotification } = useNotification();

  const { mutate: onLogin, error } = useMutation({
    mutationFn: (params: { phone: string; code: string }) =>
      api.identity.authControllerAuthByPhone(params),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      setIsAuthorized(true);
    },
    onError: (error) => {
      showNotification(error.response?.data.message);
    },
  });

  return {
    onLogin,
    error,
    errorText: getAxiosErrorText(error),
  };
};
