import { defineStore } from 'pinia'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number
}

interface CartResponse {
  cart: {
    id: number;
    userId: number;
    products: Product[];
  };
  date: string;
}
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] as Product[], 
  }),
  getters: {
    cartQuantity: (state) => state.items.reduce((total, item) => total + item.quantity, 0), 
  },
  actions: {
    setCartItems(products: Product[]) {
      this.items = products
    },
    async updateCartProducts() {
      const config = useRuntimeConfig();
      const cartId = config.public.cartId;

      try {
        const { data, error } = await useFetch<CartResponse>(
          `${config.public.fakeShopCarts}carts/${cartId}`,
          {
            method: 'GET',
          }
        );
        if (error.value) {
          console.error('Error fetching cart:', error.value);
          return;
        }

        if (data.value?.cart?.products) {
          this.setCartItems(data.value.cart.products)
        } else {
          console.error('Unexpected response structure:', data.value);
        }
      } catch (err) {
        console.error('Failed to fetch cart:', err);
      }

    }
  },
})