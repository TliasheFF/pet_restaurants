import { apiClient } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

const ALL_PRODUCTS_CATEGORY_KEY = '0';

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
        case ALL_PRODUCTS_CATEGORY_KEY:
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
