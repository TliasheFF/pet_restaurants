import { LoginModal } from '@features/login/ui/login-modal';
import { LogoutModal } from '@features/logout';
import { AccountCircle, Login } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useUserData } from '@shared/store/user-data';
import { type MouseEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

export const LoginButton = () => {
  const { isAuthorized, setIsAuthorized } = useUserData();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    setIsLogoutModalOpen(true);
    handleCloseMenu();
  };
  const handleConfirmLogout = () => {
    setIsLogoutModalOpen(false);
    setIsAuthorized(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  useEffect(() => {
    if (isAuthorized) {
      setIsLoginModalOpen(false);
    }
  }, [isAuthorized]);

  return (
    <>
      {isAuthorized ? (
        <>
          <Tooltip title="Профиль">
            <IconButton color="inherit" onClick={handleButtonClick}>
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleCloseMenu}
          >
            <MenuItem onClick={() => navigate('/orders')}>Мои заказы</MenuItem>
            <MenuItem onClick={handleLogoutClick}>Выйти</MenuItem>
          </Menu>
        </>
      ) : (
        <Tooltip title="Войти">
          <IconButton color="inherit" onClick={() => setIsLoginModalOpen(true)}>
            <Login />
          </IconButton>
        </Tooltip>
      )}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <LogoutModal
        isOpen={isLogoutModalOpen}
        onLogout={handleConfirmLogout}
        onCancel={() => setIsLogoutModalOpen(false)}
      />
    </>
  );
};
