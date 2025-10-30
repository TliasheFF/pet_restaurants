import { lazy } from 'react';
import type { RouteObject } from 'react-router';

const RestaurantPage = lazy(
  () => import('@pages/restaurants-group/restaurant'),
);

export const restaurantRoute: RouteObject = {
  path: ':seoUrl',
  element: <RestaurantPage />,
};
