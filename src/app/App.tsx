import { ThemeProvider } from '@emotion/react';
import { theme } from '@shared/config/theme';
import { useNotification } from '@shared/ui/notification';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AxiosError } from 'axios';
import { RouterProvider } from 'react-router';

import { router } from './router';

import './App.css';

export function App() {
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
    <QueryClientProvider client={quertClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
