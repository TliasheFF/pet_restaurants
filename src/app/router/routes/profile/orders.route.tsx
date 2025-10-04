import { OrdersPage, OrdersPageLayout } from '@pages/profile-group/orders';

export const ordersRoute = {
  path: 'profile/orders',
  element: <OrdersPageLayout />,
  children: [{ index: true, element: <OrdersPage /> }],
};
