import { apiClient } from '@shared/api';
import { useMutation } from '@tanstack/react-query';

export const useAddToCart = (onSuccess?: () => void) => {
  return useMutation({
    mutationFn: (productId: string) => {
      return apiClient.cart.cartControllerAddToCart({ productId });
    },
    onSuccess,
  });
};
