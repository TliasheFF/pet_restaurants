import { Order, useGetOrders } from '@entities/order';
import { Box, Typography } from '@mui/material';
import { ErrorBlock } from '@shared/ui/error-block';
import { Loader } from '@shared/ui/loader';

import styles from './orders-page.module.css';

export const OrdersPage = () => {
  const { data, isLoading, isError } = useGetOrders();

  if (isLoading) {
    return <Loader isOpen={isLoading} />;
  }

  if (isError) {
    return (
      <div className={styles['orders-page']}>
        <ErrorBlock />
      </div>
    );
  }

  if (!data?.items.length) {
    return (
      <div className={styles['orders-page']}>
        <div className={styles['orders-page__empty']}>
          <Typography variant="h6">У вас пока нет заказов</Typography>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['orders-page']}>
      <Typography
        variant="h6"
        component="span"
        className={styles['orders-page__title']}
      >
        Мои заказы
      </Typography>

      <Box className={styles['orders-page__list']}>
        {data.items.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </Box>
    </div>
  );
};
