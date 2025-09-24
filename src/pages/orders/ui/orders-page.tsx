import { Order, useGetOrders } from '@entities/orders';
import { Box, Button, Container, Typography } from '@mui/material';
import { Loader } from '@shared/ui/loader';
import { useNavigate } from 'react-router';

export const OrdersPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetOrders();

  if (isLoading) {
    return <Loader isOpen={isLoading} />;
  }

  if (!data?.items.length) {
    return (
      <Box textAlign="center" marginBlockStart="20vh">
        <Typography variant="h6">У вас пока нет заказов</Typography>
      </Box>
    );
  }

  if (isError) {
    return (
      <Box textAlign="center" marginBlockStart="50vh">
        <Typography variant="h6">
          Произошла ошибка загрузки. Обновите страницу или попробуйте зайти
          позже
        </Typography>
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ marginY: 1 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Button onClick={() => navigate('/')}>К ресторанам</Button>
      </Box>
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
    </Container>
  );
};
