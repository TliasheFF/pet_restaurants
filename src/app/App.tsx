import { ThemeProvider } from '@emotion/react';
import { theme } from '@shared/config/theme';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router';

import { AuthProvider, QueryPovider } from './providers';
import { ToolpadProvider } from './providers/toolpad-provider';
import { router } from './router';

import './App.css';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToolpadProvider>
        <QueryPovider>
          <AuthProvider>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} />
          </AuthProvider>
        </QueryPovider>
      </ToolpadProvider>
    </ThemeProvider>
  );
}
