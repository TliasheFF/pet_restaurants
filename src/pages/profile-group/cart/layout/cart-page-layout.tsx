import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Container } from '@mui/material';
import { MainHeader } from '@widgets/main-header';
import { Outlet, useNavigate, useParams } from 'react-router';

export const CartPageLayout = () => {
  const { seoUrl = '' } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <MainHeader />
      <Container maxWidth="lg" sx={{ marginY: 1 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Button
            startIcon={<ArrowBack />}
            onClick={() => navigate(`/restaurant/${seoUrl}`)}
          >
            В ресторан
          </Button>
        </Box>
        <Outlet />
      </Container>
    </>
  );
};
