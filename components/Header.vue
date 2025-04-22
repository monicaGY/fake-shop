<template>
  <header
    class="header-shop sticky top-0 z-50 justify-between space-x-1 border-b p-4 shadow-md"
  >
    <div class="d-flex align-items-center gap-3">
      <NuxtLink to="/" style="text-decoration: none">
        <div class="d-flex align-items-center gap-3">
          <img
            src="/img/shopping-cart.png"
            alt="Mi Logo"
            style="height: 50px"
          />
          <div class="font-mono" style="color: aliceblue">Fake Store</div>
        </div>
      </NuxtLink>
      <div class="col"></div>
      <div>
        <h5>Hello {{ transformName(user.name.firstname) }}!</h5>
      </div>
      <NuxtLink :to="`/cart/${cartId}`">
        <div class="position-relative d-inline-block" >
        <i class="fa-solid fa-cart-shopping fa-2xl " style="color: #ffffff"></i>
        <span 
          class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" 
        >
          {{ cartStore.cartQuantity }}
          <span class="visually-hidden">productos en el carrito</span>
        </span>
      </div>
      </NuxtLink>
      
    </div>
  </header>
</template>
<script setup>
import { useCartStore } from "@/stores/cart";
const config = useRuntimeConfig();
const { data: user } = await useFetch(
  `${config.public.fakeShopDomain}users/${config.public.userIdShop}`
);
const cartId  = config.public.cartId

const cartStore = useCartStore();
const { data: cartData } = await useFetch(`${config.public.fakeShopCarts}carts/${cartId}`);
cartStore.setCartItems(cartData.value.cart.products);
const transformName = (name) => {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1);
};
</script>
