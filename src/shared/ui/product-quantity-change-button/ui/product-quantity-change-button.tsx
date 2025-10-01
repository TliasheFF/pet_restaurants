import { Add, Remove } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { ChangeQuantityEnum } from '@shared/api/dto/Api';
import type { FC } from 'react';

interface ProductQuantityChangeButtonProps {
  quantity: number;
  onChange: (action: ChangeQuantityEnum) => void;
}

export const ProductQuantityChangeButton: FC<
  ProductQuantityChangeButtonProps
> = (props) => {
  const { quantity, onChange } = props;
  return (
    <Box display="flex" alignItems="center">
      <IconButton
        color="primary"
        onClick={() => onChange(ChangeQuantityEnum.Value1)}
      >
        <Remove />
      </IconButton>
      <Typography variant="body1" mx={1}>
        {quantity}
      </Typography>
      <IconButton
        color="primary"
        onClick={() => onChange(ChangeQuantityEnum.Value0)}
      >
        <Add />
      </IconButton>
    </Box>
  );
};
