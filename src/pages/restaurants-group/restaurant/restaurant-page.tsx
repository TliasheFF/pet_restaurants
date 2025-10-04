import { Container } from '@mui/material';
import { ProductsList } from '@widgets/restaurants-group/products-list';

import { RestaurantPageHeader } from './ui/restaurant-page-header';

import styles from './restaurant-page.module.css';

export const RestaurantPage = () => {
  return (
    <Container maxWidth="lg" className={styles['restaurant-page']}>
      <RestaurantPageHeader />
      <ProductsList />
    </Container>
  );
};
