import { useGetRestaurant } from '@entities/restaurants-group/restaurant';
import { useUserCart } from '@features/profile-group/user-cart';
import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import {
  Badge,
  Box,
  Button,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router';

import styles from './restaurant-page-header.module.css';

export const RestaurantPageHeader = () => {
  const navigate = useNavigate();
  const { seoUrl = '' } = useParams();

  const { data: restaurantData } = useGetRestaurant(seoUrl);
  const { totalCount } = useUserCart(restaurantData?.id || 0);

  return (
    <Box className={styles['restaurant-page-header']}>
      <Box className={styles['restaurant-page-header__left']}>
        <Tooltip title="Назад">
          <Button startIcon={<ArrowBack />} onClick={() => navigate('/')} />
        </Tooltip>
        <Typography variant="h6" component="span">
          {restaurantData?.name}
        </Typography>
      </Box>

      {!!totalCount && (
        <Tooltip title="Корзина">
          <IconButton
            color="inherit"
            onClick={() => navigate(`/profile/cart/${seoUrl}`)}
          >
            <Badge badgeContent={totalCount} color="primary">
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Tooltip>
      )}
    </Box>
  );
};
