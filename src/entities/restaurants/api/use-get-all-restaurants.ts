import { api } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetAllRestaurants = (params: {
  pageSize: string;
  pageNumber: string;
}) => {
  return useQuery({
    queryKey: ['restaurants', params],
    queryFn: () => api.restaurant.restaurantControllerGetAllRestaurants(params),
    select: (data) => {
      return {
        // временно. Удалить лишние рестораны в БД
        items: data.data.items.filter((item) => item.enabled),
        totalPages: data.data.totalPages,
      };
    },
  });
};
