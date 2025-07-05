import { createQueryKey } from '@shared/lib/create-query-key';

export const restaurantsQueryKeys = {
  all: (params: { pageSize: string; pageNumber: string }) =>
    createQueryKey('restaurants', params),
  byId: (id: string) => createQueryKey('restaurant', { id }),
} as const;
