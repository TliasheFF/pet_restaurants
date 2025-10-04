import { Box, Button, Container } from '@mui/material';
import { Outlet, useNavigate } from 'react-router';

export const OrdersPageLayout = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="lg" sx={{ marginY: 1 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Button onClick={() => navigate(`/`)}>К ресторанам</Button>
      </Box>
      <Outlet />
    </Container>
  );
};
