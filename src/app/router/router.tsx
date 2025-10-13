import { AppLayout } from '@app/layout';
import { createBrowserRouter } from 'react-router';

import { indexRoute } from './routes/index.route';
import { notFoundRoute } from './routes/not-found.route';

export const router = createBrowserRouter([
  { element: <AppLayout />, children: [...indexRoute, notFoundRoute] },
]);
