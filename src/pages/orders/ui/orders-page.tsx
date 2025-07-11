import { Order, useGetOrders } from '@entities/orders';
import { Box, Typography } from '@mui/material';
import { Loader } from '@shared/ui/loader';

export const OrdersPage = () => {
  const { data, isLoading, isError } = useGetOrders();

  if (isLoading) {
    return <Loader isOpen={isLoading} />;
  }

  if (isError) {
    return (
      <Box textAlign="center" marginBlockStart="50vh">
        Произошла ошибка загрузки. Обновите страницу или попробуйте зайти позже
      </Box>
    );
  }

  return (
    <>
      <Typography variant="h6" component="span">
        Мои заказы
      </Typography>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={2}
        marginBlockStart={2}
      >
        {data?.items.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </Box>
    </>
  );
};
