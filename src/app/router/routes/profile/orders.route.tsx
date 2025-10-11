import { OrdersPage } from '@pages/profile-group/orders';
import type { RouteObject } from 'react-router';

export const ordersRoute: RouteObject = {
  path: '*',
  element: <OrdersPage />,
};
