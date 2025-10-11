import { CheckoutPage } from '@pages/profile-group/checkout';
import type { RouteObject } from 'react-router';

export const checkoutRoute: RouteObject = {
  path: ':seoUrl',
  element: <CheckoutPage />,
};
