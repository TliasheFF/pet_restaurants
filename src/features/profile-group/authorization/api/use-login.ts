import { useUserData } from '@entities/profile-group/user';
import { apiClient } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const { setIsAuthorized } = useUserData();

  return useMutation({
    mutationFn: (params: { phone: string; code: string }) =>
      apiClient.identity.authControllerAuthByPhone(params),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.accessToken);
      localStorage.setItem('refreshToken', data.data.refreshToken);
      setIsAuthorized(true);
    },
  });
};
