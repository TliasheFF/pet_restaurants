import { ThemeProvider } from '@emotion/react';
import { theme } from '@shared/config/theme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';

import { router } from './router';

import './App.css';

const quertClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={quertClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
