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
import { type Product } from '@shared/api/dto/Api';
import { MAIN_COLORS } from '@shared/config/theme';

export const ProductCard = (props: {
  product: Product;
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  productQuantity: number;
}) => {
  const {
    product: { name, image, price, weight, calories, id },
    addProduct,
    removeProduct,
    productQuantity,
  } = props;

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
            backgroundColor: MAIN_COLORS.normalSuperLight,
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
              <Box>
                <IconButton onClick={() => removeProduct(id)}>
                  <Remove />
                </IconButton>
                {productQuantity}
                <IconButton onClick={() => addProduct(id)}>
                  <Add />
                </IconButton>
              </Box>
            ) : (
              <Button
                variant="contained"
                onClick={() => addProduct(id)}
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
