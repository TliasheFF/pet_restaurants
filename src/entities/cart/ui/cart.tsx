import { ProductQuantityChangeButton } from '@entities/product';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { type CartItem, ChangeQuantityEnum } from '@shared/api/dto/Api';
import type { FC } from 'react';

interface CartProps {
  item: CartItem;
  changeQuantity: (id: number, action: ChangeQuantityEnum) => void;
}

export const Cart: FC<CartProps> = (props) => {
  const { item, changeQuantity } = props;

  const handleChange = (action: ChangeQuantityEnum) => {
    changeQuantity(item.id, action);
  };

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        p: 2,
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt={item.title}
        sx={{
          width: 100,
          height: 100,
          borderRadius: 2,
          objectFit: 'cover',
          mr: 2,
        }}
      />

      <CardContent
        sx={{
          flex: 1,
          p: 0,
          '&:last-child': { pb: 0 },
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.restaurantName}
        </Typography>

        <Box
          mt={1}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
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
