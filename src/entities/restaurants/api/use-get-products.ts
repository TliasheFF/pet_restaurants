import { api } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetProducts = (params: {
  seoUrl: string;
  pageSize: string;
  pageNumber: string;
}) => {
  return useQuery({
    queryKey: ['products', params],
    queryFn: () => api.products.productsControllerGetProductByRestId(params),
  });
};
