import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useNotifications } from '@toolpad/core/useNotifications';
import { AxiosError } from 'axios';

export const QueryPovider = ({ children }: { children: React.ReactNode }) => {
  const notifications = useNotifications();

  const quertClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error) => {
          if (error instanceof AxiosError) {
            notifications.show(error?.response?.data?.message, {
              severity: 'error',
            });
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={quertClient}>{children}</QueryClientProvider>
  );
};
