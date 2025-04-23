<template>
  <Header></Header>
  <div>
    <div class="container col">
      <div v-for="(product, index) in products" class="row p-3 my-3 product-cart">
        <CartProduct :product @delete="deleteProduct(index)"></CartProduct>        
      </div>
    </div>
  </div>
</template>
<script setup>
const route = useRoute();
const config = useRuntimeConfig();
const router = useRouter();
let products = ref(null);
let carId = ref(null);

const getProductsByCart = async () => {
  try {
    const response = await $fetch(
      `${config.public.fakeShopCarts}carts/${route.params.id}`
    );
    carId.value = response.cart.id;
    products.value = response.cart.products;
  } catch (error) {
    await router.push("/");
  }
};

onMounted(() => {
  getProductsByCart();
});

function deleteProduct(index) {
  products.value.splice(index, 1)
}
</script>
