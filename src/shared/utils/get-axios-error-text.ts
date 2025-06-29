import { AxiosError } from "axios";

export const getAxiosErrorText = (error: unknown) => {
  if (error instanceof AxiosError) {
    return error.response?.data.message;
  }
  return null;
};
