import { CartPage, CartPageLayout } from '@pages/cart';
import { NotFoundPage } from '@pages/not-found';
import { OrderPage } from '@pages/order';
import { OrdersPage, OrdersPageLayout } from '@pages/orders';
import { RestaurantPage } from '@pages/restaurant';
import { RestaurantsPage } from '@pages/restaurants';
import { createBrowserRouter } from 'react-router';

import { Layout } from '../layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <RestaurantsPage /> },
      { path: 'restaurant/:seoUrl', element: <RestaurantPage /> },
      {
        path: 'cart/:seoUrl',
        element: <CartPageLayout />,
        children: [{ index: true, element: <CartPage /> }],
      },
      {
        path: 'order/:seoUrl',
        element: <OrderPage />,
      },
      {
        path: 'orders',
        element: <OrdersPageLayout />,
        children: [{ index: true, element: <OrdersPage /> }],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
