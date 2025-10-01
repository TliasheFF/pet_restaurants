import { ProductQuantityChangeButton } from '@entities/product';
import {
  AddShoppingCart,
  BatteryChargingFull,
  Scale,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Tooltip,
  Typography,
} from '@mui/material';
import { ChangeQuantityEnum, type Product } from '@shared/api/dto/Api';
import { MAIN_COLORS } from '@shared/config/theme';
import type { FC } from 'react';

interface ProductCardProps {
  product: Product;
  addToCart: (id: string) => void;
  changeQuantity: (id: number, action: ChangeQuantityEnum) => void;
  productQuantity: number;
}

export const ProductCard: FC<ProductCardProps> = (props) => {
  const {
    product: { name, image, price, weight, calories, id },
    productQuantity,
    addToCart,
    changeQuantity,
  } = props;

  const handleChange = (action: ChangeQuantityEnum) => {
    changeQuantity(id, action);
  };

  return (
    <Card
      sx={{
        width: 350,
        ':hover': { scale: 1.01, transition: '0.5s' },
      }}
    >
      <CardMedia image={image} title={name} sx={{ height: 200 }} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" component="span">
          {name}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            maxWidth: 'fit-content',
            borderRadius: 15,
          }}
        >
          <Typography variant="h6" component="span" color="primary">
            {price} ₽
          </Typography>
        </Box>

        <Box display="flex" justifyContent="space-between" height={30}>
          <Box
            display="flex"
            gap={2}
            fontSize={12}
            color={MAIN_COLORS.disabledDark}
          >
            <Tooltip title="Вес">
              <Box display="flex" alignItems="center" gap={1}>
                <Scale />
                <span>{weight}</span>
              </Box>
            </Tooltip>
            <Tooltip title="Количество калорий">
              <Box display="flex" alignItems="center" gap={1}>
                <BatteryChargingFull />
                <span>{calories}</span>
              </Box>
            </Tooltip>
          </Box>

          <Box>
            {!!productQuantity ? (
              <ProductQuantityChangeButton
                quantity={productQuantity}
                onChange={handleChange}
              />
            ) : (
              <Button
                variant="contained"
                onClick={() => addToCart(String(id))}
                endIcon={<AddShoppingCart />}
              >
                Добавить
              </Button>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
