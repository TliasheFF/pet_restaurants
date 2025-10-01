import type { Theme } from '@emotion/react';
import type { Components } from '@mui/material';

export const MuiAccordion: Components<
  Omit<Theme, 'components'>
>['MuiAccordion'] = {
  styleOverrides: {
    root: {
      boxShadow:
        '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      borderRadius: 10,
    },
  },
};
