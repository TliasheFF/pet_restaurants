import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useUserData } from '@shared/store/user-data';
import { Modal } from '@shared/ui/modal';
import { type MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router';

export const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const { setIsAuthorized } = useUserData();
  const open = Boolean(anchorEl);

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handleConfirmLogout = () => {
    handleCloseMenu();
    setIsAuthorized(false);
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  };

  return (
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
        <MenuItem
          onClick={() => {
            navigate('/orders');
            handleCloseMenu();
          }}
        >
          Мои заказы
        </MenuItem>
        <MenuItem
          onClick={() => {
            Modal.confirm({
              content: 'Вы уверены, что хотите выйти?',
              okText: 'Выйти',
              cancelText: 'Отменить',
              onOk: handleConfirmLogout,
            });
          }}
        >
          Выйти
        </MenuItem>
      </Menu>
    </>
  );
};
