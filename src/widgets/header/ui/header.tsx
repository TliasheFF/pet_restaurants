import { ProfileMenu } from '@entities/profile-menu';
import { LoginModal } from '@features/authorization';
import { Home, Login, ShoppingCart } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Tooltip } from '@mui/material';
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
          <Box sx={{ flexGrow: 1 }}>
            <Link to="/" style={{ color: 'inherit' }}>
              <Home />
            </Link>
          </Box>

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
