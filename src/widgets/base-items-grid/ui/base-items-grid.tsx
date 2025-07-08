import { Box } from '@mui/material';

export const BaseItemsGrid = (props: { children: React.ReactNode }) => {
  return (
    <Box
      paddingY={2}
      display="flex"
      flexWrap="wrap"
      justifyContent="space-evenly"
      gap={2}
    >
      {props.children}
    </Box>
  );
};
