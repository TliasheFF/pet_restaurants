import { Layout } from '@app/layout';

import { cartRoute } from './profile/cart.route';
import { checkoutRoute } from './profile/checkout.route';
import { ordersRoute } from './profile/orders.route';
import { restaurantRoute } from './restaurants/restaurant.route';
import { restaurantsRoute } from './restaurants/restaurants.route';

export const indexRoute = {
  path: '/',
  element: <Layout />,
  children: [
    restaurantsRoute,
    restaurantRoute,
    cartRoute,
    checkoutRoute,
    ordersRoute,
  ],
};
