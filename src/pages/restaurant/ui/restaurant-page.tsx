import { ProductCard } from '@entities/restaurants';
import { useGetProducts } from '@entities/restaurants/api/use-get-products';
import { useGetRestaurant } from '@entities/restaurants/api/use-get-restaurant';
import { ArrowBack } from '@mui/icons-material';
import { Pagination, Tooltip, Typography } from '@mui/material';
import { Loader } from '@shared/ui/loader';
import { BaseItemsGrid } from '@widgets/base-items-grid';
import { useState } from 'react';
import { Link, useParams } from 'react-router';

export const RestaurantPage = () => {
  const [page, setPage] = useState(1);
  const { seoUrl } = useParams();

  const { data: restaurantData } = useGetRestaurant(seoUrl ?? '');
  // как продукты соотносятся с категориями?
  // const {} = useGetCategories({ id: String(restaurantData?.data.id) ?? "" });
  const { data: productsData, isLoading: isProductsLoading } = useGetProducts({
    seoUrl: seoUrl ?? '',
    pageSize: String(6),
    pageNumber: String(page - 1),
  });

  if (isProductsLoading) {
    return <Loader isOpen={isProductsLoading} text="Загружаем блюда..." />;
  }

  return (
    <>
      <div
        style={{ marginTop: 20, display: 'flex', alignItems: 'end', gap: 10 }}
      >
        <Tooltip title="Назад">
          <Link to={'/'} style={{ color: 'inherit' }}>
            <ArrowBack />
          </Link>
        </Tooltip>
        <Typography variant="h6" component="span">
          {restaurantData?.data.name}
        </Typography>
      </div>

      <BaseItemsGrid>
        {productsData?.data.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </BaseItemsGrid>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={productsData?.data?.totalPages}
          page={page}
          onChange={(_, pageNumber) => setPage(pageNumber)}
        />
      </div>
    </>
  );
};
