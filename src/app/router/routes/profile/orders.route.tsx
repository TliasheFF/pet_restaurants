import { lazy } from 'react';
import type { RouteObject } from 'react-router';

const OrdersPage = lazy(() => import('@pages/profile-group/orders'));

export const ordersRoute: RouteObject = {
  path: '*',
  element: <OrdersPage />,
};
