import { useGetAllRestaurants } from "@entities/restaurants/api/use-get-all-restaurants";
import { RestaurantCard } from "@entities/restaurants";
import { Pagination } from "@mui/material";
import type { Restaurant } from "@shared/api/dto/Api";
import { Loader } from "@shared/ui/loader";
import { useEffect, useState } from "react";

import { BaseItemsGrid } from "@widgets/base-items-grid";

const PER_PAGE = 6;

export const RestaurantsPage = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError } = useGetAllRestaurants({
    pageSize: String(PER_PAGE),
    pageNumber: String(page - 1),
  });
  const { data: dataSource } = data ?? {};

  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);

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
      <div style={{ display: "flex", justifyContent: "center" }}>
        Произошла ошибка загрузки. Обновите страницу или попробуйте зайти позже
      </div>
    );
  }

  const count = Math.ceil(dataSource?.totalItems! / PER_PAGE);

  return (
    <>
      <BaseItemsGrid>
        {filteredRestaurants?.map((item) => (
          <RestaurantCard key={item.id} restaurant={item} />
        ))}
      </BaseItemsGrid>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {dataSource?.totalItems! > PER_PAGE && (
          <Pagination count={count} page={page} onChange={(_, pageNumber) => setPage(pageNumber)} />
        )}
      </div>
    </>
  );
};
