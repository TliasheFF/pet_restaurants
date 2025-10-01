import { apiClient } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllRestaurants = (params: {
  pageSize: string;
  pageNumber: string;
}) => {
  return useQuery({
    queryKey: ['restaurants', params],
    queryFn: () =>
      apiClient.restaurant.restaurantControllerGetAllRestaurants(params),
    select: (data) => {
      return {
        items: data.data.items,
        totalPages: data.data.totalPages,
      };
    },
  });
};
