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
  Button,
  Container,
  IconButton,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from '@mui/material';
import { ErrorBlock } from '@shared/ui/error-block';
import { Pagination } from '@shared/ui/pagination';
import { BaseItemsGrid } from '@widgets/base-items-grid';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

export const RestaurantPage = () => {
  const navigate = useNavigate();
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
  const { cart, totalCount, addToCart, changeQuantity } = useUserCart(
    restaurantData?.id || 0,
  );

  if (isError) {
    return <ErrorBlock />;
  }

  return (
    <Container maxWidth="lg" sx={{ marginY: 1 }}>
      <Box
        display="flex"
        alignItems="end"
        justifyContent={'space-between'}
        margin={2}
        height={40}
      >
        <Box display="flex" alignItems="end" gap={1}>
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
              onClick={() => navigate(`/cart/${seoUrl}`)}
            >
              <Badge badgeContent={totalCount} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Tooltip>
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
    </Container>
  );
};
