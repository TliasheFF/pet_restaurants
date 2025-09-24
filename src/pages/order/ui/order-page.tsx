import { useCreateOrder } from '@entities/orders';
import { useGetRestaurant } from '@entities/restaurants';
import { useGetUser } from '@entities/user';
import { useUserCart } from '@features/user-cart';
import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  Container,
  Divider,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { useNotifications } from '@toolpad/core/useNotifications';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { MAIL_REGEXP } from '../constants/mail-regexp';

export const OrderPage = () => {
  const navigate = useNavigate();
  const { seoUrl = '' } = useParams();
  const { data: restaurantData } = useGetRestaurant(seoUrl);
  const restId = Number(restaurantData?.id);
  const { cart, restaurantName, totalPrice } = useUserCart(restId);
  const { data: user } = useGetUser();
  const notifications = useNotifications();

  const [name, setName] = useState(user?.firstName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [comment, setComment] = useState('');

  if (!cart?.products.length) {
    return (
      <Container maxWidth="sm" sx={{ mt: 10 }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            textAlign: 'center',
            borderRadius: 3,
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h6" color="text.secondary" gutterBottom>
            🛒 Корзина пуста
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            Похоже, у вас нет добавленных товаров. Пожалуйста, вернитесь в меню
            и выберите что-нибудь вкусное!
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate(`/restaurant/${seoUrl}`)}
          >
            Вернуться в ресторан
          </Button>
        </Paper>
      </Container>
    );
  }

  const createOrderSuccessCallback = () => {
    notifications.show(
      <span>
        Ваш заказ успешно создан! <br /> Менеджер скоро свяжется с вами
      </span>,
      { severity: 'success' },
    );

    navigate('/');
  };

  const { mutate: createOrder } = useCreateOrder(createOrderSuccessCallback);

  const emailError = useMemo(() => {
    if (!email)
      return 'Пожалуйста, укажите почту. Информация нужна для отправки квитанции о заказе';
    return MAIL_REGEXP.test(email) ? '' : 'Неверный формат почты';
  }, [email]);

  const isFormInvalid = !!emailError;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!!emailError) return;
    createOrder({
      name,
      phone: user?.phone || '',
      email,
      comment,
      tableNumber: 1,
      cartId: cart?.id || 0,
    });
  };

  return (
    <Container maxWidth="lg" sx={{ marginY: 1 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate(`/cart/${seoUrl}`)}
        >
          В корзину
        </Button>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          minHeight: '100%',
          display: 'grid',
          placeItems: 'center',
          bgcolor: 'background.default',
          px: 2,
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            width: '100%',
            maxWidth: 560,
            p: { xs: 2.5, sm: 3.5 },
            borderRadius: 3,
          }}
        >
          <Stack spacing={2.5}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                gap: 2,
              }}
            >
              <Box>
                <Typography variant="overline" color="text.secondary">
                  Ресторан
                </Typography>
                <Typography variant="h6" fontWeight={700}>
                  {restaurantName || '—'}
                </Typography>
              </Box>
              <Box textAlign="right">
                <Typography variant="overline" color="text.secondary">
                  Итого
                </Typography>
                <Typography variant="h5" color="primary" fontWeight={800}>
                  {totalPrice} ₽
                </Typography>
              </Box>
            </Box>

            <Divider />

            <Typography variant="h5" fontWeight={700}>
              Оформление заказа
            </Typography>

            <TextField
              label="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Гость"
              fullWidth
              autoComplete="name"
            />

            <TextField
              label="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value.trim())}
              required
              error={!!emailError}
              helperText={emailError || ' '}
              type="email"
              fullWidth
              autoComplete="email"
            />

            <TextField
              label="Комментарий к заказу"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Например: без лука, позвонить курьеру"
              fullWidth
              multiline
              minRows={3}
              maxRows={6}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={isFormInvalid}
            >
              Оплатить
            </Button>
          </Stack>
        </Paper>
      </Box>
    </Container>
  );
};
