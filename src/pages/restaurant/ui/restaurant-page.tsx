import {
  ProductCard,
  useGetCategories,
  useGetProducts,
  useGetRestaurant,
} from '@entities/restaurants';
import { useUserCart } from '@features/user-cart';
import { ArrowBack, ShoppingCart } from '@mui/icons-material';
import {
  Badge,
  Box,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from '@mui/material';
import { Pagination } from '@shared/ui/pagination';
import { BaseItemsGrid } from '@widgets/base-items-grid';
import { useState } from 'react';
import { Link, useParams } from 'react-router';

export const RestaurantPage = () => {
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
  const { cart } = useUserCart(restaurantData?.id || 0);

  const productsInCartCount = cart?.products.reduce(
    (acc, item) => acc + item.quantity,
    0,
  );

  if (isError) {
    return (
      <Box textAlign="center" marginBlockStart={'50vh'}>
        Произошла ошибка загрузки. Обновите страницу или попробуйте зайти позже
      </Box>
    );
  }

  return (
    <>
      <Box
        display="flex"
        alignItems="end"
        justifyContent={'space-between'}
        margin={2}
        height={40}
      >
        <Box display="flex" alignItems="end" gap={1}>
          <Tooltip title="Назад">
            <Link to={'/'} style={{ color: 'inherit' }}>
              <ArrowBack />
            </Link>
          </Tooltip>
          <Typography variant="h6" component="span">
            {restaurantData?.name}
          </Typography>
        </Box>

        {!!productsInCartCount && (
          <Link to="/cart" style={{ color: 'inherit' }}>
            <Tooltip title="Корзина">
              <IconButton color="inherit">
                <Badge badgeContent={productsInCartCount} color="primary">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Tooltip>
          </Link>
        )}
      </Box>

      {!!categories?.length && (
        <Tabs
          value={activeCategoryId}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          sx={{ mt: 2 }}
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
        {productsData?.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </BaseItemsGrid>

      <Pagination
        page={page}
        totalPages={productsData?.totalPages}
        onChange={setPage}
      />
    </>
  );
};
