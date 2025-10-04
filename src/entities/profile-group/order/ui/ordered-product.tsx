import { Box, Typography } from '@mui/material';
import type { OrderProductDto } from '@shared/api/dto/Api';

import styles from './ordered-product.module.css';

export const OrderedProduct = ({ product }: { product: OrderProductDto }) => {
  const { price, quantity, title } = product;

  return (
    <Box className={styles['ordered-product']}>
      <Typography
        variant="body1"
        component="span"
        className={styles['ordered-product__title']}
      >
        {title} ({quantity} шт.)
      </Typography>
      <Box className={styles['ordered-product__separator']} />
      <Typography
        variant="body1"
        component="span"
        className={styles['ordered-product__price']}
      >
        {price} ₽
      </Typography>
    </Box>
  );
};
