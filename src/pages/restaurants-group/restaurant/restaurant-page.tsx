import { Container } from '@mui/material';
import { MainHeader } from '@widgets/main-header';
import { ProductsList } from '@widgets/restaurants-group/products-list';

import { RestaurantPageHeader } from './ui/restaurant-page-header';

import styles from './restaurant-page.module.css';

export const RestaurantPage = () => {
  return (
    <>
      <MainHeader />
      <Container maxWidth="lg" className={styles['restaurant-page']}>
        <RestaurantPageHeader />
        <ProductsList />
      </Container>
    </>
  );
};
