import {
  ProductCard,
  useGetCategories,
  useGetProducts,
  useGetRestaurant,
} from '@entities/restaurants';
import { ArrowBack } from '@mui/icons-material';
import { Box, Pagination, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import { Loader } from '@shared/ui/loader';
import { BaseItemsGrid } from '@widgets/base-items-grid';
import { useState } from 'react';
import { Link, useParams } from 'react-router';

export const RestaurantPage = () => {
  const [page, setPage] = useState(1);
  const [activeTabId, setActiveTabId] = useState(0);
  const { seoUrl = '' } = useParams();

  const handleTabChange = (_: React.SyntheticEvent, id: number) => {
    setActiveTabId(id);
  };

  const { data: restaurantData } = useGetRestaurant(seoUrl);
  const { data: productsData, isLoading: isProductsLoading } = useGetProducts({
    seoUrl,
    restaurantId: Number(restaurantData?.id),
    pageSize: String(6),
    pageNumber: String(page - 1),
    categoryId: String(activeTabId),
  });
  const { data: categories } = useGetCategories(restaurantData?.id);

  if (isProductsLoading) {
    return <Loader isOpen={isProductsLoading} text="Загружаем блюда..." />;
  }

  return (
    <>
      <Box display="flex" alignItems="end" gap={1} marginBlockStart={2}>
        <Tooltip title="Назад">
          <Link to={'/'} style={{ color: 'inherit' }}>
            <ArrowBack />
          </Link>
        </Tooltip>
        <Typography variant="h6" component="span">
          {restaurantData?.name}
        </Typography>
      </Box>

      <Box display="flex" alignItems="end" gap={1} marginBlockStart={2}>
        <Tabs
          value={activeTabId}
          onChange={handleTabChange}
          aria-label="product category"
        >
          <Tab label="Все" />
          {categories?.map((category) => (
            <Tab value={category.categoryId} label={category.categoryName} />
          ))}
        </Tabs>
      </Box>

      <BaseItemsGrid>
        {productsData?.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </BaseItemsGrid>

      <Box display="flex" justifyContent="center">
        <Pagination
          count={productsData?.totalPages}
          page={page}
          onChange={(_, pageNumber) => setPage(pageNumber)}
        />
      </Box>
    </>
  );
};
