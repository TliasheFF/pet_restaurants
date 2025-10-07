import { Box, Card, CardContent, Typography } from '@mui/material';
import { type CartItem, ChangeQuantityEnum } from '@shared/api/dto/Api';
import { Counter } from '@shared/ui/counter';
import type { FC } from 'react';

import styles from './cart-element.module.css';

interface CartItemProps {
  item: CartItem;
  changeQuantity: (id: number, action: ChangeQuantityEnum) => void;
}

export const CartElement: FC<CartItemProps> = ({ item, changeQuantity }) => {
  const handleIncrease = () => {
    changeQuantity(item.id, ChangeQuantityEnum.Value0);
  };

  const handleDecrease = () => {
    changeQuantity(item.id, ChangeQuantityEnum.Value1);
  };

  return (
    <Card className={styles['cart-element']}>
      <img
        src={item.image}
        alt={item.title}
        className={styles['cart-element__media']}
      />

      <CardContent className={styles['cart-element__content']}>
        <Typography variant="h6" fontWeight="bold">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.restaurantName}
        </Typography>

        <Box className={styles['cart-element__footer']}>
          <Typography variant="h6" color="primary">
            {item.price} ₽
          </Typography>

          <Counter
            count={item.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
