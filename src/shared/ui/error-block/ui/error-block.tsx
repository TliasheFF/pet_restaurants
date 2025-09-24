import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button, Typography } from '@mui/material';
import type { FC } from 'react';

interface ErrorBlockProps {
  message?: string;
  onRetry?: () => void;
}

export const ErrorBlock: FC<ErrorBlockProps> = (props) => {
  const {
    message = 'Произошла ошибка загрузки. Попробуйте обновить страницу или зайти позже',
    onRetry,
  } = props;

  const handleReload = () => {
    if (onRetry) {
      onRetry();
    } else {
      window.location.reload();
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="60vh"
      textAlign="center"
      px={2}
    >
      <Typography
        variant="h6"
        gutterBottom
        color="text.secondary"
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        {message}
      </Typography>
      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        onClick={handleReload}
        sx={{ mt: 2 }}
      >
        Обновить страницу
      </Button>
    </Box>
  );
};
