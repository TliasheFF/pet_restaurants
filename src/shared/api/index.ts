import { Api } from "./dto/Api";

export const api = new Api({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

api.instance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken")}`;
  return config;
});
