import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router';

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h3">Ошибка</Typography>
      <Typography
        variant="h6"
        component="span"
        textAlign="center"
        maxWidth={900}
        marginBottom={2}
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
