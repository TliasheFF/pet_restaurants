import { apiClient } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetCartByRestaurantId = (id?: number) => {
  return useQuery({
    queryKey: ['cart', id],
    queryFn: () =>
      apiClient.cart.cartControllerGetUserCart({ restaurantId: String(id) }),
    select: (data) => data.data,
    enabled: !!id,
  });
};
