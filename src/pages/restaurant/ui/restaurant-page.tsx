import { ArrowBack } from "@mui/icons-material";
import { Grid } from "@mui/material";
import { api } from "@shared/api";
import { Loader } from "@shared/ui/loader";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";

const getRestaurantById = (seoUrl: string) => {
  return api.restaurant.restaurantControllerGetRestaurantById({ seoUrl }).then((res) => res.data);
};

export const RestaurantPage = () => {
  const { seoUrl } = useParams();

  const { isLoading } = useQuery({
    queryKey: ["restaurant", seoUrl],
    queryFn: () => getRestaurantById(seoUrl ?? ""),
    enabled: !!seoUrl,
  });

  if (isLoading) {
    return <Loader text="Загружаем блюда..." />;
  }

  return (
    <>
      <Link to={"/"}>
        <ArrowBack sx={{ mt: 2 }} />
      </Link>
      <Grid container spacing={2}></Grid>
    </>
  );
};
