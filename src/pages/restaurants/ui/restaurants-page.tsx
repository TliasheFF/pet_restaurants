import { RestaurantCard } from '@entities/restaurants';
import { useGetAllRestaurants } from '@entities/restaurants/api/use-get-all-restaurants';
import { Box } from '@mui/material';
import { Pagination } from '@shared/ui/pagination';
import { BaseItemsGrid } from '@widgets/base-items-grid';
import { useState } from 'react';

export const RestaurantsPage = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetAllRestaurants({
    pageSize: String(6),
    pageNumber: String(page - 1),
  });

  if (isError) {
    return (
      <Box textAlign="center" marginBlockStart={'50vh'}>
        Произошла ошибка загрузки. Обновите страницу или попробуйте зайти позже
      </Box>
    );
  }

  return (
    <>
      <BaseItemsGrid loading={isLoading}>
        {data?.items?.map((item) => (
          <RestaurantCard key={item.id} restaurant={item} />
        ))}
      </BaseItemsGrid>

      <Pagination
        page={page}
        totalPages={data?.totalPages}
        onChange={setPage}
      />
    </>
  );
};
