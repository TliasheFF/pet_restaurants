import { apiClient } from '@shared/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useClearCart = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (restaurantId: number) => {
      return apiClient.cart.cartControllerClearCart({
        restaurantId: String(restaurantId),
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      onSuccess?.();
    },
  });
};
