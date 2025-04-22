import { defineStore } from 'pinia'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number
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
  },
})