import { Add, Remove } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import type { FC } from 'react';

interface CounterProps {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export const Counter: FC<CounterProps> = (props) => {
  const { count, onIncrease, onDecrease } = props;
  return (
    <Box display="flex" alignItems="center">
      <IconButton color="primary" onClick={onDecrease}>
        <Remove />
      </IconButton>
      <Typography variant="body1" mx={1}>
        {count}
      </Typography>
      <IconButton color="primary" onClick={onIncrease}>
        <Add />
      </IconButton>
    </Box>
  );
};
