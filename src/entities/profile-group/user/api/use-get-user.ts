import { apiClient } from '@shared/api';
import { useQuery } from '@tanstack/react-query';

export const useGetUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: () => apiClient.users.usersControllerGetUser(),
    select: (data) => data.data,
  });
};
