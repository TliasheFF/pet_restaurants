import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";
import { RestaurantsPage } from "@pages/restaurants";
import { RestaurantPage } from "@pages/restaurant";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <RestaurantsPage /> },
      { path: "restaurant/:seoUrl", element: <RestaurantPage /> },
      // { path: "users/:userId", element: <></> },
    ],
  },
]);
