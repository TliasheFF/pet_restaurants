import { apiClient } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      apiClient.orders.ordersControllerGetOrderOfUser({
        pageNumber: '0',
        pageSize: '1000',
      }),
    select: (data) => data.data,
  });
};
