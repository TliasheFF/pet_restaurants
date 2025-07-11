import { DialogsProvider } from '@toolpad/core/useDialogs';
import { NotificationsProvider } from '@toolpad/core/useNotifications';

export const ToolpadProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <DialogsProvider>
      <NotificationsProvider
        slotProps={{
          snackbar: {
            anchorOrigin: { vertical: 'top', horizontal: 'right' },
            autoHideDuration: 6000,
          },
        }}
      >
        {children}
      </NotificationsProvider>
    </DialogsProvider>
  );
};
