import { createBrowserRouter } from "react-router";
import { Layout } from "../layout";
import { RestaurantsPage } from "@pages/restaurants";
import { RestaurantPage } from "@pages/restaurant";
import { NotFoundPage } from "@pages/not-found";
import { CartPage } from "@pages/cart";
import { AuthProvider } from "@app/providers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <RestaurantsPage /> },
      { path: "restaurant/:seoUrl", element: <RestaurantPage /> },
      {
        path: "cart",
        element: (
          <AuthProvider>
            <CartPage />
          </AuthProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
