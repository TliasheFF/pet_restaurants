import { apiClient } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetCategories = (id?: number) => {
  return useQuery({
    queryKey: ['categories', id],
    queryFn: () =>
      apiClient.category.categoryControllerGetCategoriesByRestaurantId({
        id: String(id),
      }),
    select: (data) => data.data,
    enabled: !!id,
  });
};
