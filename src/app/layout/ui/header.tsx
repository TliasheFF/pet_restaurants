import { DinnerDining } from '@mui/icons-material';
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import { ProfileMenu } from '@widgets/profile-group/profile-menu';
import { useNavigate } from 'react-router';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box display="flex" alignItems="center" sx={{ flexGrow: 1 }}>
          <Button
            startIcon={<DinnerDining sx={{ color: 'white' }} />}
            variant="outlined"
            onClick={() => navigate('/')}
          >
            <Typography variant="h6" component="span" color="white">
              Restaurants
            </Typography>
          </Button>
        </Box>
        <ProfileMenu />
      </Toolbar>
    </AppBar>
  );
};
