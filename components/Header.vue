<template>
  <header
    class="header-shop sticky top-0 z-50 justify-between space-x-1 border-b p-4 shadow-md"
  >
      <div class="d-flex align-items-center gap-5">
        <NuxtLink to="/" style="text-decoration: none;">
          <div class="d-flex align-items-center gap-3">
            <img src="/img/shopping-cart.png" alt="Mi Logo" style="height: 50px" />
            <div class="font-mono" style="color: aliceblue;">Fake Store</div>
          </div>
        </NuxtLink>        
        <div class="col"></div>
        <div>
          <h5>Hello {{transformName(data.name.firstname)}}! </h5>          
        </div>
        <div><i class="fa-solid fa-cart-plus fa-2xl" style="color: #ffffff;"></i></div>
      </div>
  </header>
</template>
<script setup>
const config = useRuntimeConfig();
const { data } = await useFetch(`${config.public.fakeShopDomain}users/${config.public.userIdShop}`);

const transformName = (name) => {
  if (!name) return '';
  return name.charAt(0).toUpperCase() + name.slice(1);
}
</script>
