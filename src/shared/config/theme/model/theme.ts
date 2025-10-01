import { createTheme } from '@mui/material';

import { MuiAccordion } from '../constants/mui-components/mui-accordion';
import { MuiButton } from '../constants/mui-components/mui-button';
import { MuiCard } from '../constants/mui-components/mui-card';
import { MuiTab } from '../constants/mui-components/mui-tab';
import { MuiTooltip } from '../constants/mui-components/mui-tooltip';
import { palette } from '../constants/palette';
import { typography } from '../constants/typography';

export const theme = createTheme({
  cssVariables: true,
  typography,
  palette,
  components: {
    MuiCard,
    MuiTooltip,
    MuiButton,
    MuiTab,
    MuiAccordion,
  },
});
