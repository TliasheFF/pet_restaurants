import { api } from '@shared/api';
import { getAxiosErrorText } from '@shared/utils';
import { useMutation } from '@tanstack/react-query';

export const useGenerateLoginCode = () => {
  const {
    mutate: generateCode,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: (params: { phone: string }) =>
      api.sms.smsControllerGenerateCode(params),
  });

  return {
    generateCode,
    error,
    errorText: getAxiosErrorText(error),
    isSuccess,
  };
};
