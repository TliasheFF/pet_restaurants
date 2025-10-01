import { Layout } from '@app/layout';

import { cartRoute } from './cart.route';
import { orderRoute } from './order.route';
import { ordersRoute } from './orders.route';
import { restaurantRoute } from './restaurant.route';
import { restaurantsRoute } from './restaurants.route';

export const mainRoute = {
  path: '/',
  element: <Layout />,
  children: [
    restaurantsRoute,
    restaurantRoute,
    cartRoute,
    orderRoute,
    ordersRoute,
  ],
};
