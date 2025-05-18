import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import type { Restaurant } from "@shared/api/dto/Api";
import type { FC } from "react";
import { useNavigate } from "react-router";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const cardStyles = {
  width: 350,
  ":hover": { cursor: "pointer", scale: 1.01, transition: "0.5s" },
};

export const RestaurantCard: FC<RestaurantCardProps> = (props) => {
  const {
    restaurant: { logo, name, seoUrl },
  } = props;
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/restaurant/${seoUrl}`);
  };

  return (
    <Grid size={{ xs: 8, md: 6, lg: 4 }}>
      <Card sx={{ ...cardStyles }} onClick={handleCardClick}>
        <CardMedia image={logo} title={name} sx={{ height: 200 }} />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h6" component="span">
            {name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
