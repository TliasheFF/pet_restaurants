import { RestaurantCard } from '@entities/restaurant';
import { useGetAllRestaurants } from '@entities/restaurant/api/use-get-all-restaurants';
import { Container } from '@mui/material';
import { ErrorBlock } from '@shared/ui/error-block';
import { Pagination } from '@shared/ui/pagination';
import { BaseItemsGrid } from '@widgets/base-items-grid';
import { useState } from 'react';

import { DEFAULT_PAGE_SIZE } from '../constants/default-page-size';

export const RestaurantsPage = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetAllRestaurants({
    pageSize: String(DEFAULT_PAGE_SIZE),
    pageNumber: String(page - 1),
  });

  if (isError) {
    return <ErrorBlock />;
  }

  return (
    <Container maxWidth="lg" sx={{ marginY: 1 }}>
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
    </Container>
  );
};
