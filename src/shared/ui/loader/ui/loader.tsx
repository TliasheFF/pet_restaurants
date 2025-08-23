import { Box, CircularProgress, Typography } from '@mui/material';

export const Loader = (props: { isOpen: boolean; text?: string }) => {
  const { text = 'Загрузка...' } = props;

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
      <Typography sx={{ mt: 2 }}>{text}</Typography>
    </Box>
  );
};
