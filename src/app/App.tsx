import { ThemeProvider } from '@emotion/react';
import { theme } from '@shared/config/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';

import { QueryPovider } from './providers';
import { router } from './router';

import './App.css';

export function App() {
  return (
    <QueryPovider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryPovider>
  );
}
