import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { Restaurant } from '@shared/api/dto/Api';
import { useNavigate } from 'react-router';

import styles from './restaurant-card.module.css';

export const RestaurantCard = ({ restaurant }: { restaurant: Restaurant }) => {
  const { logo, name, seoUrl } = restaurant;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/restaurant/${seoUrl}`);
  };

  return (
    <Card className={styles['restaurant-card']} onClick={handleClick}>
      <CardMedia
        image={logo}
        title={name}
        className={styles['restaurant-card__media']}
      />
      <CardContent className={styles['restaurant-card__content']}>
        <Typography
          variant="h6"
          component="span"
          className={styles['restaurant-card__title']}
        >
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
};
