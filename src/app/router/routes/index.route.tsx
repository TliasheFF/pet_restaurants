import { lazy } from 'react';
import type { RouteObject } from 'react-router';

import { profileRoutes } from './profile/profile.routes';
import { restaurantRoute } from './restaurants/restaurant.route';

const HomePage = lazy(() => import('@pages/home'));

export const indexRoute: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: 'profile/*',
    children: [...profileRoutes],
  },
  {
    path: 'restaurant/*',
    children: [restaurantRoute],
  },
];
