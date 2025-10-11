import { CartPageLayout } from '@pages/profile-group/cart';
import { OrdersPageLayout } from '@pages/profile-group/orders';
import type { RouteObject } from 'react-router';

import { cartRoute } from './cart.route';
import { checkoutRoute } from './checkout.route';
import { ordersRoute } from './orders.route';

export const profileRoutes: RouteObject[] = [
  {
    path: 'cart/*',
    element: <CartPageLayout />,
    children: [cartRoute],
  },
  {
    path: 'checkout/*',
    children: [checkoutRoute],
  },
  {
    path: 'orders',
    element: <OrdersPageLayout />,
    children: [ordersRoute],
  },
];
