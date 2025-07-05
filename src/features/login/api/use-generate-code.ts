import { api } from '@shared/api';
import { useNotification } from '@shared/ui/notification';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const useGenerateLoginCode = () => {
  const { showNotification } = useNotification();

  return useMutation({
    mutationFn: (params: { phone: string }) =>
      api.sms.smsControllerGenerateCode(params),
    onError: (error) => {
      if (error instanceof AxiosError) {
        showNotification(error.response?.data.message);
      }
    },
  });
};
