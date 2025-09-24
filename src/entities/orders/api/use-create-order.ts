import { apiClient } from '@shared/api';
import type { CreateOrderDto } from '@shared/api/dto/Api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateOrder = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (params: CreateOrderDto) => {
      return apiClient.orders.ordersControllerCreateOrder(params);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
      onSuccess?.();
    },
  });
};
