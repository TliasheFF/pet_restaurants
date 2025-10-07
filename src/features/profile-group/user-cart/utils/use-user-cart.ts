import { ChangeQuantityEnum } from '@shared/api/dto/Api';
import { useMemo } from 'react';

import { useAddToCart } from '../api/use-add-to-cart';
import { useChangeQuantity } from '../api/use-change-quantity';
import { useClearCart } from '../api/use-clear-cart';
import { useGetCartByRestaurantId } from '../api/use-get-cart-by-restaurant-id';

export const useUserCart = (restaurantId: number) => {
  const { data: cart } = useGetCartByRestaurantId(restaurantId);
  const { mutate: addToCart } = useAddToCart();
  const { mutate: changeQuantity } = useChangeQuantity();
  const { mutate: clearCart } = useClearCart();

  const totalPrice = useMemo(() => {
    return cart?.products.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
  }, [cart?.products]);

  const totalCount = useMemo(() => {
    return cart?.products.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart?.products]);

  const addToCartHandler = (productId: string) => {
    addToCart(productId);
  };

  const handleChangeHandler = (
    productId: number,
    action: ChangeQuantityEnum,
  ) => {
    changeQuantity({
      restaurantId,
      productId,
      action,
    });
  };

  return {
    cart,
    restaurantName: cart?.products[0]?.restaurantName || '',
    totalPrice,
    totalCount,
    addToCart: addToCartHandler,
    changeQuantity: handleChangeHandler,
    clearCart,
  };
};
