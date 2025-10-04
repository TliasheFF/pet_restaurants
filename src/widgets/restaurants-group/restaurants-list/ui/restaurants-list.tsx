import { RestaurantCard, useGetAllRestaurants } from '@entities/restaurant';
import { BaseItemsGrid } from '@shared/ui/base-items-grid';
import { ErrorBlock } from '@shared/ui/error-block';
import { Pagination } from '@shared/ui/pagination';
import { useState } from 'react';

import { DEFAULT_PAGE_SIZE } from '../constants/default-page-size';

export const RestaurantsList = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetAllRestaurants({
    pageSize: String(DEFAULT_PAGE_SIZE),
    pageNumber: String(page - 1),
  });

  if (isError) {
    return <ErrorBlock />;
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
