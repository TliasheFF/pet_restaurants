import { apiClient } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

export const useGenerateLoginCode = () => {
  return useMutation({
    mutationFn: (params: { phone: string }) =>
      apiClient.sms.smsControllerGenerateCode(params),
  });
};
