import { Close } from '@mui/icons-material';
import { Alert, IconButton, Snackbar } from '@mui/material';

import { $notificationStore } from '../model/notification';

export const Notification = () => {
  const { isOpen, duration, message, setIsOpen } = $notificationStore();

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={() => setIsOpen(false)}
    >
      <Close fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={() => setIsOpen(false)}
    >
      <Alert
        severity="error"
        variant="filled"
        sx={{ maxWidth: '300px' }}
        action={action}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
