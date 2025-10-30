import { lazy } from 'react';
import type { RouteObject } from 'react-router';

const CheckoutPage = lazy(() => import('@pages/profile-group/checkout'));

export const checkoutRoute: RouteObject = {
  path: ':seoUrl',
  element: <CheckoutPage />,
};
