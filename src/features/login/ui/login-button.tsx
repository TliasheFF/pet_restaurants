import { LoginModal } from "@features/login/ui/login-modal";
import { AccountCircle, Login } from "@mui/icons-material";
import { IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { useUserData } from "@shared/store/user-data";
import { useEffect, useState, type MouseEvent } from "react";

export const LoginButton = () => {
  const { isAuthorized, setIsAuthorized } = useUserData();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogoutClick = () => {
    handleClose();
    setIsAuthorized(false);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
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
            <IconButton color="inherit" onClick={handleClick}>
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Мои заказы</MenuItem>
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
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
    </>
  );
};
