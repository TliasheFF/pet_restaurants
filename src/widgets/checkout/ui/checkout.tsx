import { useGetRestaurant } from '@entities/restaurant';
import { useGetUser } from '@entities/user';
import { useCreateOrder } from '@features/cart-group/create-order';
import { useUserCart } from '@features/cart-group/user-cart';
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
import { MAIL_REGEXP } from '@shared/constants';
import { useNotifications } from '@toolpad/core/useNotifications';
import { useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import styles from './checkout.module.css';

export const Checkout = () => {
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

  if (!cart?.products.length) {
    return (
      <Container maxWidth="sm" className={styles['checkout__empty']}>
        <Paper elevation={3} className={styles['checkout__empty-paper']}>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            🛒 Корзина пуста
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            className={styles['checkout__empty-text']}
          >
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

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className={styles['checkout__form']}
    >
      <Paper elevation={3} className={styles['checkout__paper']}>
        <Stack spacing={2.5}>
          <Box className={styles['checkout__header']}>
            <Box>
              <Typography variant="overline" color="text.secondary">
                Ресторан
              </Typography>
              <Typography variant="h6" fontWeight={700}>
                {restaurantName || '—'}
              </Typography>
            </Box>
            <Box className={styles['checkout__total']}>
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
  );
};
