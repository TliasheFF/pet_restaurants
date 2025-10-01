import { CartPage, CartPageLayout } from '@pages/cart';

export const cartRoute = {
  path: 'cart/:seoUrl',
  element: <CartPageLayout />,
  children: [{ index: true, element: <CartPage /> }],
};
