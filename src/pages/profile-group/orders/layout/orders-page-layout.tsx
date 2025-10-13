import { Box, Button, Container } from '@mui/material';
import { MainHeader } from '@widgets/main-header';
import { Outlet, useNavigate } from 'react-router';

export const OrdersPageLayout = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
      <Container maxWidth="lg" sx={{ marginY: 1 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Button onClick={() => navigate(`/`)}>К ресторанам</Button>
        </Box>
        <Outlet />
      </Container>
    </>
  );
};
