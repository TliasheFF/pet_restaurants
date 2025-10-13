import { Box } from '@mui/material';
import { Outlet } from 'react-router';

export const AppLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Outlet />
    </Box>
  );
};
