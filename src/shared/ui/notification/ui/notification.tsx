import { Alert, Snackbar } from '@mui/material';

import { notificationStore } from '../model/notification';

export const Notification = () => {
  const { isOpen, duration, message, setIsOpen } = notificationStore();

  return (
    <Snackbar
      open={isOpen}
      autoHideDuration={duration}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      onClose={() => setIsOpen(false)}
    >
      <Alert severity="error" variant="filled" sx={{ width: '100%' }}>
        {message}
      </Alert>
    </Snackbar>
  );
};
