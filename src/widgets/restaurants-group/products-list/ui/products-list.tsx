import {
  ProductCard,
  useGetCategories,
  useGetProducts,
} from '@entities/restaurants-group/product';
import { useGetRestaurant } from '@entities/restaurants-group/restaurant';
import { useUserCart } from '@features/profile-group/user-cart';
import { Tab, Tabs } from '@mui/material';
import { BaseItemsGrid } from '@shared/ui/base-items-grid';
import { ErrorBlock } from '@shared/ui/error-block';
import { Pagination } from '@shared/ui/pagination';
import { useState } from 'react';
import { useParams } from 'react-router';

import styles from './products-list.module.css';

export const ProductsList = () => {
  const [page, setPage] = useState(1);
  const [activeCategoryId, setActiveCategoryId] = useState(0);
  const { seoUrl = '' } = useParams();

  const handleTabChange = (_: React.SyntheticEvent, id: number) => {
    setActiveCategoryId(id);
  };

  const { data: restaurantData } = useGetRestaurant(seoUrl);
  const {
    data: productsData,
    isLoading: isProductsLoading,
    isError,
  } = useGetProducts({
    seoUrl,
    restaurantId: Number(restaurantData?.id),
    pageSize: String(6),
    pageNumber: String(page - 1),
    categoryId: String(activeCategoryId),
  });
  const { data: categories } = useGetCategories(restaurantData?.id);
  const { cart, addToCart, changeQuantity } = useUserCart(
    restaurantData?.id || 0,
  );

  if (isError) {
    return <ErrorBlock />;
  }

  return (
    <>
      {!!categories?.length && (
        <Tabs
          value={activeCategoryId}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          className={styles['products-list__tabs']}
        >
          <Tab key="all" label="Все" />
          {categories.map((category) => (
            <Tab
              key={category.categoryId}
              value={category.categoryId}
              label={category.categoryName}
            />
          ))}
        </Tabs>
      )}

      <BaseItemsGrid loading={isProductsLoading}>
        {productsData?.items.map((product) => {
          const productQuantity = cart?.products.find(
            (item) => item.id === product.id,
          )?.quantity;

          return (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              changeQuantity={changeQuantity}
              productQuantity={productQuantity || 0}
            />
          );
        })}
      </BaseItemsGrid>

      <Pagination
        page={page}
        totalPages={productsData?.totalPages}
        onChange={setPage}
      />
    </>
  );
};
