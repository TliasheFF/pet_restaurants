import { LoginForm } from "@features/login/ui/login-form";
import { Paper } from "@mui/material";
import { useUserData } from "@shared/store/user-data";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuthorized } = useUserData();

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <Paper elevation={3} sx={{ padding: 2, width: 300, margin: "25% auto" }}>
      <LoginForm />
    </Paper>
  );
};
