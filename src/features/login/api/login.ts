import { api } from "@shared/api";

export const login = (credentials: { email: string; password: string }) => {
  return api.identity.authControllerLogin(credentials);
};
