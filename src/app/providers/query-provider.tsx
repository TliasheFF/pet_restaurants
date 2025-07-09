import { useNotification } from '@shared/ui/notification';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';

export const QueryPovider = ({ children }: { children: React.ReactNode }) => {
  const { showNotification } = useNotification();

  const quertClient = new QueryClient({
    defaultOptions: {
      mutations: {
        onError: (error) => {
          if (error instanceof AxiosError) {
            showNotification(error.response?.data.message);
          }
        },
      },
    },
  });

  return (
    <QueryClientProvider client={quertClient}>{children}</QueryClientProvider>
  );
};
