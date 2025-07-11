import { ThemeProvider } from '@emotion/react';
import { theme } from '@shared/config/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';

import { QueryPovider } from './providers';
import { ToolpadProvider } from './providers/toolpad-provider';
import { router } from './router';

import './App.css';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToolpadProvider>
        <QueryPovider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryPovider>
      </ToolpadProvider>
    </ThemeProvider>
  );
}
