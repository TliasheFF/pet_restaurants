import { useUserData } from '@entities/profile-group/user';
import { AccountCircle } from '@mui/icons-material';
import { IconButton, Menu, MenuItem, Tooltip } from '@mui/material';
import { useDialogs } from '@toolpad/core/useDialogs';
import { type MouseEvent, useState } from 'react';
import { useNavigate } from 'react-router';

export const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const dialogs = useDialogs();
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

  const handleCloseClick = async () => {
    const confirmed = await dialogs.confirm('Вы уверены что хотите выйти?', {
      title: 'Подтверждение',
      okText: 'Выйти',
      cancelText: 'Отменить',
      severity: 'warning',
    });

    if (confirmed) {
      handleConfirmLogout();
    } else {
      handleCloseMenu();
    }
  };

  return (
    <>
      <Tooltip title="Профиль">
        <IconButton color="inherit" onClick={handleButtonClick}>
          <AccountCircle />
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
        <MenuItem
          onClick={() => {
            navigate('/profile/orders');
            handleCloseMenu();
          }}
        >
          Мои заказы
        </MenuItem>
        <MenuItem onClick={handleCloseClick}>Выйти</MenuItem>
      </Menu>
    </>
  );
};
