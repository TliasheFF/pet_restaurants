import { RestaurantCard } from '@entities/restaurants';
import { useGetAllRestaurants } from '@entities/restaurants/api/use-get-all-restaurants';
import { Pagination } from '@mui/material';
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
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        Произошла ошибка загрузки. Обновите страницу или попробуйте зайти позже
      </div>
    );
  }

  return (
    <>
      <BaseItemsGrid>
        {filteredRestaurants?.map((item) => (
          <RestaurantCard key={item.id} restaurant={item} />
        ))}
      </BaseItemsGrid>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={dataSource?.totalPages}
          page={page}
          onChange={(_, pageNumber) => setPage(pageNumber)}
        />
      </div>
    </>
  );
};
