import { api } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetRestaurant = (seoUrl: string) => {
  return useQuery({
    queryKey: ['restaurant', { seoUrl }],
    queryFn: () =>
      api.restaurant.restaurantControllerGetRestaurantById({ seoUrl }),
    select: (data) => data.data,
    enabled: !!seoUrl,
  });
};
