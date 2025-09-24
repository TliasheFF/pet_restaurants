import { apiClient } from '@shared/api';
import type { ChangeQuantityEnum } from '@shared/api/dto/Api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useChangeQuantity = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: {
      restaurantId: number;
      productId: number;
      action: ChangeQuantityEnum;
    }) => {
      const { restaurantId, productId, action } = params;
      return apiClient.cart.cartControllerChangeQuantity({
        restaurantId,
        productId,
        action,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      onSuccess?.();
    },
  });
};
