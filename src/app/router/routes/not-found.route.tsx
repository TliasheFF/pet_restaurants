import { lazy } from 'react';
import type { RouteObject } from 'react-router';

const NotFoundPage = lazy(() => import('@pages/not-found'));

export const notFoundRoute: RouteObject = {
  path: '*',
  element: <NotFoundPage />,
};
