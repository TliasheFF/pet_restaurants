import { RestaurantCard } from '@entities/restaurants';
import { useGetAllRestaurants } from '@entities/restaurants/api/use-get-all-restaurants';
import { Box, Pagination } from '@mui/material';
import type { Restaurant } from '@shared/api/dto/Api';
import { Loader } from '@shared/ui/loader';
import { BaseItemsGrid } from '@widgets/base-items-grid';
import { useEffect, useState } from 'react';

export const RestaurantsPage = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetAllRestaurants({
    pageSize: String(6),
    pageNumber: String(page - 1),
  });
  const { data: dataSource } = data ?? {};

  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    [],
  );

  useEffect(() => {
    if (dataSource?.items) {
      setFilteredRestaurants(dataSource.items);
    }
  }, [data]);

  if (isLoading) {
    return <Loader isOpen={isLoading} text="Загружаем рестораны..." />;
  }

  if (isError) {
    return (
      <Box textAlign="center" marginBlockStart={'50vh'}>
        Произошла ошибка загрузки. Обновите страницу или попробуйте зайти позже
      </Box>
    );
  }

  return (
    <>
      <BaseItemsGrid>
        {filteredRestaurants?.map((item) => (
          <RestaurantCard key={item.id} restaurant={item} />
        ))}
      </BaseItemsGrid>

      <Box display="flex" justifyContent="center">
        <Pagination
          count={dataSource?.totalPages}
          page={page}
          onChange={(_, pageNumber) => setPage(pageNumber)}
        />
      </Box>
    </>
  );
};
