import { createQueryKey } from "@shared/lib/create-query-key";

export const productsQueryKeys = {
  byRestorantId: (params: { seoUrl: string; pageSize: string; pageNumber: string }) =>
    createQueryKey("products", params),
} as const;
