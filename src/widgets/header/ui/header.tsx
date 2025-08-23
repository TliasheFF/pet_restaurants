import { ProfileMenu } from '@entities/profile-menu';
import { Home } from '@mui/icons-material';
import { AppBar, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit' }}>
            <Home />
          </Link>
        </Box>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
};
