import { AuthProvider } from '@app/providers';
import { CartPage } from '@pages/cart';
import { NotFoundPage } from '@pages/not-found';
import { OrdersPage } from '@pages/orders';
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
        path: 'cart',
        element: (
          <AuthProvider>
            <CartPage />
          </AuthProvider>
        ),
      },
      {
        path: 'orders',
        element: (
          <AuthProvider>
            <OrdersPage />
          </AuthProvider>
        ),
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);
