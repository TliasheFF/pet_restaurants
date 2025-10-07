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
import { Counter } from '@shared/ui/counter';
import type { FC } from 'react';

import styles from './product-card.module.css';

interface ProductCardProps {
  product: Product;
  addToCart: (id: string) => void;
  changeQuantity: (id: number, action: ChangeQuantityEnum) => void;
  productQuantity: number;
}

export const ProductCard: FC<ProductCardProps> = ({
  product: { name, image, price, weight, calories, id },
  productQuantity,
  addToCart,
  changeQuantity,
}) => {
  const handleIncrease = () => {
    changeQuantity(id, ChangeQuantityEnum.Value0);
  };

  const handleDecrease = () => {
    changeQuantity(id, ChangeQuantityEnum.Value1);
  };

  return (
    <Card className={styles['product-card']}>
      <CardMedia
        image={image}
        title={name}
        className={styles['product-card__media']}
      />
      <CardContent className={styles['product-card__content']}>
        <Typography variant="h6" component="span">
          {name}
        </Typography>

        <Box className={styles['product-card__price-container']}>
          <Typography variant="h6" component="span" color="primary">
            {price} ₽
          </Typography>
        </Box>

        <Box className={styles['product-card__info-row']}>
          <Box className={styles['product-card__info-left']}>
            <Tooltip title="Вес">
              <Box className={styles['product-card__info-left-box']}>
                <Scale />
                <span>{weight}</span>
              </Box>
            </Tooltip>
            <Tooltip title="Количество калорий">
              <Box className={styles['product-card__info-left-box']}>
                <BatteryChargingFull />
                <span>{calories}</span>
              </Box>
            </Tooltip>
          </Box>

          <Box>
            {!!productQuantity ? (
              <Counter
                count={productQuantity}
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
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
