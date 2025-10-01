import { Cart } from '@entities/cart';
import { useGetRestaurant } from '@entities/restaurant';
import { useUserCart } from '@features/user-cart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';

import styles from './cart-page.module.css';

export const CartPage = () => {
  const navigate = useNavigate();
  const { seoUrl = '' } = useParams();
  const { data: restaurantData } = useGetRestaurant(seoUrl);
  const restId = Number(restaurantData?.id);
  const { cart, totalPrice, changeQuantity, clearCart } = useUserCart(restId);

  if (!cart?.products.length) {
    return <Box className={styles['cart-page__empty']}>Ваша корзина пуста</Box>;
  }

  const handleClear = () => {
    clearCart(restId);
  };

  const handleCreateOrder = () => {
    navigate(`/order/${seoUrl}`);
  };

  return (
    <>
      <Box className={styles['cart-page__header']}>
        <Typography variant="h6" fontWeight="bold">
          Ваш заказ
        </Typography>
        <Typography variant="h5" color="primary" fontWeight="bold">
          {totalPrice} ₽
        </Typography>
      </Box>

      <Box className={styles['cart-page__list']}>
        {cart?.products.map((item) => (
          <Cart key={item.id} item={item} changeQuantity={changeQuantity} />
        ))}
      </Box>

      <Box className={styles['cart-page__footer']}>
        <div className={styles['cart-page__actions']}>
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
        </div>
      </Box>
    </>
  );
};
