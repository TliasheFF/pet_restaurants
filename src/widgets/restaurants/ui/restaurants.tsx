import { Grid } from "@mui/material";
import { Loader } from "@shared/ui/loader";
import { Search } from "@shared/ui/search";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { RestaurantCard } from "./restaurant-card";
import type { Restaurant } from "@shared/api/dto/Api";
import { loadAllRestaurants } from "../api/load-all-restaurants";

export const Restaurants = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["restaurants"],
    queryFn: loadAllRestaurants,
  });

  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    if (data?.items) {
      setFilteredRestaurants(data.items);
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

  return (
    <>
      <Search
        items={data?.items}
        searchKey="name"
        onSearch={setFilteredRestaurants}
        label="Найти ресторан"
        isFullWidth
      />

      <Grid container spacing={2}>
        {filteredRestaurants?.map((item) => (
          <RestaurantCard key={item.id} restaurant={item} />
        ))}
      </Grid>
    </>
  );
};
