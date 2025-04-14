<template>
  <div class="container mt-2 mb-5">
    <div v-if="productsFilter" class="row gap-3">
      <div
        class="col-auto"
        v-for="product in productsFilter"
        :key="product.id"
        style="height: 20rem; width: 15rem"
      >
        <div
          class="product-card"
          style="height: 100%; width: 100%; object-fit: contain"
        >
          <div class="d-flex justify-content-center">
            <NuxtLink :to="`/product/${product.id}`">
              <div style="height: 150px; width: 100px">
                <img
                  :src="product.image"
                  style="height: 100%; width: 100%; object-fit: contain"
                />
              </div>
            </NuxtLink >
          </div>

          <div class="container">
            <div class="col" style="margin-top: 12px">
              <h4 class="product-title row-9" :title="product.title">
                {{
                  product.title.length > 25
                    ? product.title.slice(0, 20) + "..."
                    : product.title
                }}
              </h4>
              <div class="row-3">
                <div class="product-rating">
                  <span class="rating">{{ product.rating.rate }} ★</span>
                  <span class="review-count"
                    >({{ product.rating.count }} reviews)</span
                  >
                </div>

                <div class="product-price">{{ product.price }} USD</div>
              </div>
            </div>
          </div>
        </div>
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
