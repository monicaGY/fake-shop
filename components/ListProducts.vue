<template>
  <div class="container mt-2 mb-5">
    <div v-if="productsFilter" class="row gap-3">
      <div
        class="col-auto"
        v-for="product in productsFilter"
        :key="product.id"
        style="height: 21rem; width: 15rem"
      >
        <Product :product="product"></Product>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  orderBy: '',
  priceMin: '',
  priceMax: ''
})

const config = useRuntimeConfig();
const { data } = await useFetch(`${config.public.fakeShopDomain}products`);
let products = ref(data)

const productsFilter = computed(() => {
  let filteredProducts = products.value.filter((product) => {
    const price = product.price;
    return (
      (props.priceMin ? price >= props.priceMin : true) &&
      (props.priceMax ? price <= props.priceMax : true)
    );
  });

  if (props.orderBy === 'asc') {
    filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
  } else if (props.orderBy === 'desc') {
    filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
  }

  return filteredProducts;
});
</script>
