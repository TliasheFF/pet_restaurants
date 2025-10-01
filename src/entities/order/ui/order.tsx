import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import type { GetOrderDto } from '@shared/api/dto/Api';
import { MAIN_COLORS } from '@shared/config/theme';
import dayjs from 'dayjs';

import { OrderedProduct } from './ordered-product';

import styles from './order.module.css';

export const Order = ({ order }: { order: GetOrderDto }) => {
  const { id, restaurantName, createdAt, products, price } = order;

  return (
    <Accordion className={styles['order']}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box className={styles['order__summary-content']}>
          <Box className={styles['order__summary-left']}>
            <Typography variant="h6" component="span">
              Заказ #{id}
            </Typography>
            <Typography variant="subtitle1" component="span">
              {restaurantName}
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              style={{ color: MAIN_COLORS.disabledDark }}
            >
              Создан {dayjs(createdAt).format('DD.MM.YYYY HH:mm')}
            </Typography>
          </Box>
          <Typography variant="h6" component="span">
            {price} ₽
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {products.map((product) => (
          <OrderedProduct key={product.id} product={product} />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
