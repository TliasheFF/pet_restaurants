import {
  useAddToCart,
  useChangeQuantity,
  useGetCartByRestaurantId,
} from '@entities/cart';
import { ChangeQuantityEnum } from '@shared/api/dto/Api';

export const useUserCart = (restaurantId: number) => {
  const { data: cart, refetch } = useGetCartByRestaurantId(restaurantId);
  const { mutate: addToCart } = useAddToCart(refetch);
  const { mutate: changeQuantity } = useChangeQuantity(refetch);

  const increment = (productId: number) => {
    const productQuantity =
      cart?.products.find((item) => item.id === productId)?.quantity || 0;

    if (productQuantity === 0) {
      addToCart(String(productId));
    } else {
      changeQuantity({
        restaurantId,
        productId,
        action: ChangeQuantityEnum.Value0,
      });
    }
  };

  const decrement = (productId: number) => {
    changeQuantity({
      restaurantId,
      productId,
      action: ChangeQuantityEnum.Value1,
    });
  };

  return {
    cart,
    increment,
    decrement,
  };
};
