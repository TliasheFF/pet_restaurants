import {
  useAddToCart,
  useChangeQuantity,
  useClearCart,
  useGetCartByRestaurantId,
} from '@entities/profile-group/cart';
import { ChangeQuantityEnum } from '@shared/api/dto/Api';
import { useMemo } from 'react';

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
