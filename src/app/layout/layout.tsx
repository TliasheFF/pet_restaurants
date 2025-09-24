import { Box } from '@mui/material';
import { Header } from '@widgets/header';
import { Outlet } from 'react-router';

export const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Header />
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Outlet />
      </Box>
    </Box>
  );
};
