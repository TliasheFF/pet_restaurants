import { api } from "@shared/api";
import { useUserData } from "@shared/store/user-data";
import { getAxiosErrorText } from "@shared/utils";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const { setIsAuthorized } = useUserData();

  const { mutate: onLogin, error } = useMutation({
    mutationFn: (params: { phone: string; code: string }) =>
      api.identity.authControllerAuthByPhone(params),
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.data.accessToken);
      localStorage.setItem("refreshToken", data.data.refreshToken);
      setIsAuthorized(true);
    },
  });

  return {
    onLogin,
    error,
    errorText: getAxiosErrorText(error),
  };
};
