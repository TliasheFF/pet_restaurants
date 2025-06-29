import { Add, Remove } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import type { Product } from "@shared/api/dto/Api";
import { useState } from "react";

const cardStyles = {
  width: 350,
  ":hover": { cursor: "pointer", scale: 1.01, transition: "0.5s" },
};

export const ProductCard = (props: { dish: Product }) => {
  const [count, setCount] = useState(0);

  const {
    dish: { name, image, price },
  } = props;

  const handleAdd = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <Card sx={{ ...cardStyles }}>
      <CardMedia image={image} title={name} sx={{ height: 200 }} />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Typography variant="h6" component="span">
          {name}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ paddingLeft: 10, fontWeight: 500 }}>{`${price} руб.`}</span>
        <div>
          {!Boolean(count) && <Button onClick={handleAdd}>Добавить</Button>}
          {!!count && (
            <div>
              <IconButton onClick={() => setCount((prev) => prev - 1)}>
                <Remove />
              </IconButton>
              {count}
              <IconButton onClick={handleAdd}>
                <Add />
              </IconButton>
            </div>
          )}
        </div>
      </CardActions>
    </Card>
  );
};
