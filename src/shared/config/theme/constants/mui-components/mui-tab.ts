import type { Theme } from '@emotion/react';
import type { Components } from '@mui/material';

export const MuiTab: Components<Omit<Theme, 'components'>>['MuiTab'] = {
  styleOverrides: {
    root: {
      textTransform: 'none',
    },
  },
};
