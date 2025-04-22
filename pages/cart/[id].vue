<template>
  <Header></Header>
  <div>
    <div class="container col">
      <div v-for="product in products" class="row p-3 my-3 product-cart">
        <div class="col-auto">
          <div style="height: 150px; width: 100px">
            <img
              :src="product.image"
              style="height: 100%; width: 100%; object-fit: contain"
            />
          </div>
        </div>
        <div class="col">
            <div class="row">
                <div class="col">
          {{ product.title }}
        </div>
        <div class="col-auto">
          <div class="input-group row">
            <button class="col-auto btn btn-outline-secondary" type="button">
              <!--<i class="fa-solid fa-trash-can"></i>-->
              <i class="fa-solid fa-minus"></i>
            </button>
            <input
              type="number"
              class="col border border-secondary text-center"
              v-model.number="product.quantity"
              style="max-width: 100px"
            />
            <button class="col-auto btn btn-outline-secondary" type="button">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
        <div class="col-3 text-end">
          <div class="mb-4">{{ product.price }} USD</div>
          <div>
            <a href="#"><i class="fa-solid fa-trash-can" style="color: black;"></i></a>
          </div>
        </div>

            </div>
        </div>
        
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
</script>
