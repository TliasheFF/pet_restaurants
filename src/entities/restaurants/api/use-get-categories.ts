import { api } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetCategories = (id?: number) => {
  return useQuery({
    queryKey: ['categories', id],
    queryFn: () =>
      api.category.categoryControllerGetCategoriesByRestaurantId({
        id: String(id),
      }),
    select: (data) => data.data,
    enabled: !!id,
  });
};
