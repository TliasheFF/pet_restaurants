import {
  Add,
  AddShoppingCart,
  BatteryChargingFull,
  CurrencyRuble,
  Remove,
  Scale,
} from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import type { Product } from '@shared/api/dto/Api';
import { useState } from 'react';

const cardStyles = {
  width: 350,
  ':hover': { cursor: 'pointer', scale: 1.01, transition: '0.5s' },
};

export const ProductCard = (props: { product: Product }) => {
  const [count, setCount] = useState(0);

  const {
    product: { name, image, price, weight, calories },
  } = props;

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Card sx={{ ...cardStyles }}>
      <CardMedia image={image} title={name} sx={{ height: 200 }} />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h6" component="span">
          {name}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#f1f1f1',
            padding: '0 10px',
            maxWidth: 'fit-content',
            borderRadius: 15,
          }}
        >
          <Typography variant="h6" component="span">
            {price}
          </Typography>
          <CurrencyRuble fontSize="small" />
        </Box>

        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap={2} fontSize={12} color={'#666'}>
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
            {!Boolean(count) && (
              <Button
                variant="contained"
                onClick={handleAdd}
                endIcon={<AddShoppingCart />}
              >
                Добавить
              </Button>
            )}
            {!!count && (
              <Box>
                <IconButton onClick={() => setCount((prev) => prev - 1)}>
                  <Remove />
                </IconButton>
                {count}
                <IconButton onClick={handleAdd}>
                  <Add />
                </IconButton>
              </Box>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};
