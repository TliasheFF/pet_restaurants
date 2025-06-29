import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import type { Restaurant } from "@shared/api/dto/Api";
import { useNavigate } from "react-router";

const cardStyles = {
  width: 350,
  ":hover": { cursor: "pointer", scale: 1.01, transition: "0.5s" },
};

export const RestaurantCard = (props: { restaurant: Restaurant }) => {
  const {
    restaurant: { logo, name, seoUrl },
  } = props;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${seoUrl}`);
  };

  return (
    <Card sx={{ ...cardStyles }} onClick={handleClick}>
      <CardMedia image={logo} title={name} sx={{ height: 200 }} />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" component="span">
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
