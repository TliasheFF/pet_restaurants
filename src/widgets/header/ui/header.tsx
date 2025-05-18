import { LoginButton } from "@features/login";
import { Restaurant, ShoppingCart } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component="span"
          sx={{ flexGrow: 1, display: "flex", alignItems: "center", gap: 1 }}
        >
          <Restaurant /> Сервис заказа блюд
        </Typography>
        <IconButton color="inherit">
          <ShoppingCart />
        </IconButton>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};
