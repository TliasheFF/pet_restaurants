import { api } from '@shared/api';
import { useUserData } from '@shared/store/user-data';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const { setIsAuthorized } = useUserData();

  return useMutation({
    mutationFn: (params: { phone: string; code: string }) =>
      api.identity.authControllerAuthByPhone(params),
    onSuccess: (data) => {
      // уточнить у Вани когда обновить доку
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      setIsAuthorized(true);
    },
  });
};
