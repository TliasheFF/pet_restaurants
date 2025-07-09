import { ProfileMenu } from '@entities/profile-menu';
import { LoginModal } from '@features/authorization';
import { Login, ShoppingCart, Store } from '@mui/icons-material';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import { useUserData } from '@shared/store/user-data';
import { useState } from 'react';
import { Link } from 'react-router';

export const Header = () => {
  const { isAuthorized } = useUserData();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  return (
    <>
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

          {isAuthorized ? (
            <ProfileMenu />
          ) : (
            <Tooltip title="Войти">
              <IconButton
                color="inherit"
                onClick={() => setIsLoginModalOpen(true)}
              >
                <Login />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};
