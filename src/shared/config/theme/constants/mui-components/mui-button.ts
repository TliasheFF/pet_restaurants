import type { Theme } from '@emotion/react';
import type { Components } from '@mui/material';

export const MuiButton: Components<Omit<Theme, 'components'>>['MuiButton'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
  },
};
