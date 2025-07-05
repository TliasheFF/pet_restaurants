import {
  Add,
  AddShoppingCart,
  BatteryChargingFull,
  CurrencyRuble,
  Remove,
  Scale,
} from '@mui/icons-material';
import {
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

        <div
          style={{
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
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div
            style={{ display: 'flex', gap: 10, color: 'gray', fontSize: 12 }}
          >
            <Tooltip title="Вес">
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <Scale />
                <span>{weight}</span>
              </div>
            </Tooltip>
            <Tooltip title="Количество калорий">
              <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                <BatteryChargingFull />
                <span>{calories}</span>
              </div>
            </Tooltip>
          </div>

          <div>
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
              <div>
                <IconButton onClick={() => setCount((prev) => prev - 1)}>
                  <Remove />
                </IconButton>
                {count}
                <IconButton onClick={handleAdd}>
                  <Add />
                </IconButton>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
