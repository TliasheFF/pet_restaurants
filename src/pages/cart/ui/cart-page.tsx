import { Cart } from '@entities/cart';
import { useGetRestaurant } from '@entities/restaurant';
import { useUserCart } from '@features/user-cart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Box, Button, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';

export const CartPage = () => {
  const navigate = useNavigate();
  const { seoUrl = '' } = useParams();
  const { data: restaurantData } = useGetRestaurant(seoUrl);
  const restId = Number(restaurantData?.id);
  const { cart, totalPrice, changeQuantity, clearCart } = useUserCart(restId);

  if (!cart?.products.length) {
    return (
      <Box
        sx={{
          height: '80vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: 'text.secondary',
        }}
      >
        Ваша корзина пуста
      </Box>
    );
  }

  const handleClear = () => {
    clearCart(restId);
  };

  const handleCreateOrder = () => {
    navigate(`/order/${seoUrl}`);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          bgcolor: 'background.paper',
          mb: 2,
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Ваш заказ
        </Typography>
        <Typography variant="h5" color="primary" fontWeight="bold">
          {totalPrice} ₽
        </Typography>
      </Box>

      <Box
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        padding={2}
      >
        {cart?.products.map((item) => (
          <Cart key={item.id} item={item} changeQuantity={changeQuantity} />
        ))}
      </Box>

      <Box
        sx={{
          position: 'sticky',
          bottom: 0,
          pt: 2,
          pb: 2,
          mt: 3,
          bgcolor: 'background.paper',
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Stack
          direction="row"
          gap={2}
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            variant="outlined"
            color="inherit"
            size="large"
            startIcon={<DeleteSweepIcon />}
            onClick={handleClear}
          >
            Очистить
          </Button>

          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ShoppingCartCheckoutIcon />}
            onClick={handleCreateOrder}
          >
            Оформить заказ
          </Button>
        </Stack>
      </Box>
    </>
  );
};
