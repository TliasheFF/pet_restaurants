import { Container } from '@mui/material';
import { RestaurantsList } from '@widgets/restaurants-group/restaurants-list';

import styles from './restaurants-page.module.css';

export const RestaurantsPage = () => {
  return (
    <Container maxWidth="lg" className={styles['restaurants-page']}>
      <RestaurantsList />
    </Container>
  );
};
