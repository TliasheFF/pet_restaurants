import { Box, Typography } from '@mui/material';
import type { OrderProductDto } from '@shared/api/dto/Api';

export const OrderedProduct = ({ product }: { product: OrderProductDto }) => {
  const { price, quantity, title } = product;

  return (
    <Box display="flex">
      <Typography variant="body1" component="span">
        {title} ({quantity} шт.)
      </Typography>
      <Box flexGrow={1} borderBottom="1px dotted" margin="0 5px" height={18} />
      <Typography variant="body1" component="span">
        {price} ₽
      </Typography>
    </Box>
  );
};
