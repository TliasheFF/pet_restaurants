import { OrdersPage, OrdersPageLayout } from '@pages/orders';

export const ordersRoute = {
  path: 'orders',
  element: <OrdersPageLayout />,
  children: [{ index: true, element: <OrdersPage /> }],
};
