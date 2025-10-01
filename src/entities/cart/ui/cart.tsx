import { Box, Card, CardContent, Typography } from '@mui/material';
import { type CartItem, ChangeQuantityEnum } from '@shared/api/dto/Api';
import { ProductQuantityChangeButton } from '@shared/ui/product-quantity-change-button';
import type { FC } from 'react';

import styles from './Cart.module.css';

interface CartProps {
  item: CartItem;
  changeQuantity: (id: number, action: ChangeQuantityEnum) => void;
}

export const Cart: FC<CartProps> = ({ item, changeQuantity }) => {
  const handleChange = (action: ChangeQuantityEnum) => {
    changeQuantity(item.id, action);
  };

  return (
    <Card className={styles['cart']}>
      <img
        src={item.image}
        alt={item.title}
        className={styles['cart__media']}
      />

      <CardContent className={styles['cart__content']}>
        <Typography variant="h6" fontWeight="bold">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.restaurantName}
        </Typography>

        <Box className={styles['cart__footer']}>
          <Typography variant="h6" color="primary">
            {item.price} ₽
          </Typography>

          <ProductQuantityChangeButton
            quantity={item.quantity}
            onChange={handleChange}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
