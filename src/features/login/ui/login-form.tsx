import { Alert, Button, Stack } from "@mui/material";
import { useUserData } from "@shared/store/user-data";
import { useState, type FC } from "react";
import { FormContainer, TextFieldElement } from "react-hook-form-mui";
import { login } from "../api/login";
import { AxiosError } from "axios";

interface LoginModalProps {
  callbackAfterLogin?: () => void;
}

export const LoginForm: FC<LoginModalProps> = (props) => {
  const { callbackAfterLogin } = props;

  const { setIsAuthorized } = useUserData();
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (credentials: { email: string; password: string }) => {
    try {
      const token = await login(credentials);
      token && setIsAuthorized(true);
      setError(null);
      callbackAfterLogin?.();
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.message);
      }
    }
  };

  return (
    <FormContainer defaultValues={{ email: "", password: "" }} onSuccess={handleSubmit}>
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        <TextFieldElement name={"email"} label={"Логин"} required type={"email"} />
        <TextFieldElement name={"password"} label={"Пароль"} required type={"password"} />
        <Button type="submit">Войти</Button>
      </Stack>
    </FormContainer>
  );
};
