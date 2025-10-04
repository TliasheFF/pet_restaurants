import { Order, useGetOrders } from '@entities/profile-group/order';
import { Box, Typography } from '@mui/material';
import { ErrorBlock } from '@shared/ui/error-block';
import { Loader } from '@shared/ui/loader';

import styles from './orders.module.css';

export const Orders = () => {
  const { data, isLoading, isError } = useGetOrders();

  if (isLoading) {
    return <Loader isOpen={isLoading} />;
  }

  if (isError) {
    return (
      <div className={styles['orders']}>
        <ErrorBlock />
      </div>
    );
  }

  if (!data?.items.length) {
    return (
      <div className={styles['orders']}>
        <div className={styles['orders__empty']}>
          <Typography variant="h6">У вас пока нет заказов</Typography>
        </div>
      </div>
    );
  }
  return (
    <Box className={styles['orders__list']}>
      {data.items.map((order) => (
        <Order key={order.id} order={order} />
      ))}
    </Box>
  );
};
