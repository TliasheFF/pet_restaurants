import { apiClient } from '@shared/api';
import type { ChangeQuantityDto } from '@shared/api/dto/Api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useChangeQuantity = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: ChangeQuantityDto) => {
      return apiClient.cart.cartControllerChangeQuantity(params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      onSuccess?.();
    },
  });
};
