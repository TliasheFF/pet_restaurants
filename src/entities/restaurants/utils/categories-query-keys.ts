import { createQueryKey } from '@shared/lib/create-query-key';

export const categoriesQueryKeys = {
  byRestorantId: (params: { id: string }) =>
    createQueryKey('categories', params),
} as const;
