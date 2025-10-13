import { HomePage } from '@pages/home';
import type { RouteObject } from 'react-router';

import { profileRoutes } from './profile/profile.routes';
import { restaurantRoute } from './restaurants/restaurant.route';

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
