import { api } from "@shared/api";

export const loadAllRestaurants = () => {
  return api.restaurant
    .restaurantControllerGetAllRestaurants({ pageSize: "10", pageNumber: "0" })
    .then((res) => res.data);
};
