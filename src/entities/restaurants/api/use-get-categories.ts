import { api } from "@shared/api";
import { useQuery } from "@tanstack/react-query";

export const useGetCategories = (params: { id: string }) => {
  return useQuery({
    queryKey: ["categories", params],
    queryFn: () => api.category.categoryControllerGetCategoriesByRestaurantId(params),
  });
};
