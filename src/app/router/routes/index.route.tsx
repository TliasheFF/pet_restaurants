import { RestaurantsPage } from '@pages/restaurants-group/restaurants';
import type { RouteObject } from 'react-router';

import { profileRoutes } from './profile/profile.routes';
import { restaurantRoute } from './restaurants/restaurant.route';

export const indexRoute: RouteObject[] = [
  {
    path: '/',
    element: <RestaurantsPage />,
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
