import type { Theme } from '@emotion/react';
import type { Components } from '@mui/material';

import { MAIN_COLORS } from '../main-colors';

export const MuiTooltip: Components<Omit<Theme, 'components'>>['MuiTooltip'] = {
  styleOverrides: {
    tooltip: {
      backgroundColor: MAIN_COLORS.primary,
    },
  },
};
