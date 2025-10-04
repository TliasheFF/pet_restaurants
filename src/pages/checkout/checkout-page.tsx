import { ArrowBack } from '@mui/icons-material';
import { Box, Button, Container } from '@mui/material';
import { Checkout } from '@widgets/checkout';
import { useNavigate, useParams } from 'react-router';

import styles from './checkout-page.module.css';

export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { seoUrl = '' } = useParams();

  return (
    <Container maxWidth="lg" className={styles['checkout-page']}>
      <Box display="flex" alignItems="center" mb={2}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(`/profile/cart/${seoUrl}`)}
        >
          В корзину
        </Button>
      </Box>

      <Checkout />
    </Container>
  );
};
