import { CartElement } from '@entities/profile-group/cart';
import { useGetRestaurant } from '@entities/restaurants-group/restaurant';
import { useUserCart } from '@features/profile-group/user-cart';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router';

import styles from './cart.module.css';

export const Cart = () => {
  const navigate = useNavigate();
  const { seoUrl = '' } = useParams();
  const { data: restaurantData } = useGetRestaurant(seoUrl);
  const restId = Number(restaurantData?.id);
  const { cart, totalPrice, changeQuantity, clearCart } = useUserCart(restId);

  if (!cart?.products.length) {
    return <Box className={styles['cart__empty']}>Ваша корзина пуста</Box>;
  }

  const handleClear = () => {
    clearCart(restId);
  };

  const handleCreateOrder = () => {
    navigate(`/checkout/${seoUrl}`);
  };
  return (
    <>
      <Box className={styles['cart__header']}>
        <Typography variant="h6" fontWeight="bold">
          Ваш заказ
        </Typography>
        <Typography variant="h5" color="primary" fontWeight="bold">
          {totalPrice} ₽
        </Typography>
      </Box>

      <Box className={styles['cart__list']}>
        {cart?.products.map((item) => (
          <CartElement
            key={item.id}
            item={item}
            changeQuantity={changeQuantity}
          />
        ))}
      </Box>

      <Box className={styles['cart__footer']}>
        <div className={styles['cart__actions']}>
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
