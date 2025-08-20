import { apiClient } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = (params: {
  seoUrl: string;
  restaurantId: number;
  pageSize: string;
  pageNumber: string;
  categoryId: string;
}) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => {
      switch (params.categoryId) {
        case '0':
          return apiClient.products.productsControllerGetProductByRestId(
            params,
          );
        default: {
          return apiClient.products.productsControllerGetProductByCategoryId(
            params,
          );
        }
      }
    },
    select: (data) => data.data,
  });
};
