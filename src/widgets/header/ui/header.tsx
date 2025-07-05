import { LoginButton } from '@features/login';
import { ShoppingCart, Store } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography
          variant="h6"
          component="span"
          sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <Link to="/" style={{ color: 'inherit' }}>
            <Store />
          </Link>
        </Typography>

        <Link to="/cart" style={{ color: 'inherit' }}>
          <Tooltip title="Корзина">
            <IconButton color="inherit">
              <ShoppingCart />
            </IconButton>
          </Tooltip>
        </Link>
        <LoginButton />
      </Toolbar>
    </AppBar>
  );
};
