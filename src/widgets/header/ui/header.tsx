import { ProfileMenu } from '@entities/profile-menu';
import { DinnerDining } from '@mui/icons-material';
import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display={'flex'} alignItems={'center'} sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ color: 'inherit' }}>
            <DinnerDining />
          </Link>
          <Typography variant="h6" component="span" sx={{ ml: 1 }}>
            Restaurants
          </Typography>
        </Box>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
};
