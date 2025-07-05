import { api } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

export const useGenerateLoginCode = () => {
  return useMutation({
    mutationFn: (params: { phone: string }) =>
      api.sms.smsControllerGenerateCode(params),
  });
};
