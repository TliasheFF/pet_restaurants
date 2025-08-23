import { AuthForm } from '@features/authorization';
import { Paper, Typography } from '@mui/material';
import { useUserData } from '@shared/store/user-data';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { isAuthorized } = useUserData();

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <Paper elevation={0} sx={{ padding: 2, width: 300, margin: '25% auto' }}>
      <Typography variant="body1" textAlign="center" marginBottom={2}>
        Для оформления заказа, нам нужно Вас идентифицировать
      </Typography>
      <AuthForm />
    </Paper>
  );
};
