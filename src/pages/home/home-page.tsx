import { Container } from '@mui/material';
import { MainHeader } from '@widgets/main-header';
import { RestaurantsList } from '@widgets/restaurants-group/restaurants-list';

import styles from './home-page.module.css';

export const HomePage = () => {
  return (
    <>
      <div>Hello</div>
      <MainHeader />
      <Container maxWidth="lg" className={styles['home-page']}>
        <RestaurantsList />
      </Container>
    </>
  );
};
