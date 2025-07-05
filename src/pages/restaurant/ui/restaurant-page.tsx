import { ProductCard } from '@entities/restaurants';
import { useGetProducts } from '@entities/restaurants/api/use-get-products';
import { useGetRestaurant } from '@entities/restaurants/api/use-get-restaurant';
import { ArrowBack } from '@mui/icons-material';
import { Pagination, Tooltip, Typography } from '@mui/material';
import { Loader } from '@shared/ui/loader';
import { BaseItemsGrid } from '@widgets/base-items-grid';
import { useState } from 'react';
import { Link, useParams } from 'react-router';

const PER_PAGE = 6;

export const RestaurantPage = () => {
  const [page, setPage] = useState(1);
  const { seoUrl } = useParams();

  const { data: restaurantData } = useGetRestaurant(seoUrl ?? '');
  // как продукты соотносятся с категориями?
  // const {} = useGetCategories({ id: String(restaurantData?.data.id) ?? "" });
  const { data: productsData, isLoading: isProductsLoading } = useGetProducts({
    seoUrl: seoUrl ?? '',
    pageSize: String(PER_PAGE),
    pageNumber: String(page - 1),
  });

  if (isProductsLoading) {
    return <Loader isOpen={isProductsLoading} text="Загружаем блюда..." />;
  }

  const count = Math.ceil(productsData?.data?.totalItems! / PER_PAGE);

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
        {productsData?.data?.totalItems! > PER_PAGE && (
          <Pagination
            count={count}
            page={page}
            onChange={(_, pageNumber) => setPage(pageNumber)}
          />
        )}
      </div>
    </>
  );
};
