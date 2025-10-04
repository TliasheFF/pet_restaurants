import { CartPage, CartPageLayout } from '@pages/profile-group/cart';

export const cartRoute = {
  path: 'profile/cart/:seoUrl',
  element: <CartPageLayout />,
  children: [{ index: true, element: <CartPage /> }],
};
