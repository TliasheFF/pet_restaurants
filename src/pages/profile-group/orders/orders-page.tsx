import { Typography } from '@mui/material';
import { Orders } from '@widgets/profile-group/orders';

export const OrdersPage = () => {
  return (
    <div>
      <Typography variant="h6" component="span">
        Мои заказы
      </Typography>

      <Orders />
    </div>
  );
};
