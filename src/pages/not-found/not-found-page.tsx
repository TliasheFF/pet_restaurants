import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

import styles from './not-found-page.module.css';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box className={styles['not-found-page']}>
      <Typography variant="h3">Ошибка</Typography>
      <Typography
        variant="h6"
        component="span"
        className={styles['not-found-page__message']}
      >
        Страница которую вы запрашиваете, не существует. Возможно она устарела,
        была удалена, или был введен неверный адрес в адресной строке.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/')}>
        На главную
      </Button>
    </Box>
  );
};
