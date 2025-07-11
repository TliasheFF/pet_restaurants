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

export const Order = ({ order }: { order: GetOrderDto }) => {
  const { id, restaurantName, createdAt, products, price } = order;

  return (
    <Accordion sx={{ minWidth: 350, width: '100%' }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Typography variant="h6" component="span">
              Заказ #{id}
            </Typography>
            <Typography variant="subtitle1" component="span">
              {restaurantName}
            </Typography>
            <Typography
              variant="subtitle1"
              component="span"
              color={MAIN_COLORS.disabledDark}
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
