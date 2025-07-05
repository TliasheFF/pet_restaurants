import { Box, Container } from '@mui/material';
import { Notification } from '@shared/ui/notification';
import { Header } from '@widgets/header';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      <Container maxWidth="lg" sx={{ marginY: 1 }}>
        <Outlet />
      </Container>
      <Notification />
    </Box>
  );
};
