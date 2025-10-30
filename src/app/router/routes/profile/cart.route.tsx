import { lazy } from 'react';
import type { RouteObject } from 'react-router';

const CartPage = lazy(() => import('@pages/profile-group/cart'));

export const cartRoute: RouteObject = {
  path: ':seoUrl',
  element: <CartPage />,
};
