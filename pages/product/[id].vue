<template>
  <Header></Header>
  <div v-if="data !== ''">
    <div class="row d-flex justify-content-center gap-5 m-3">
      <div class="col-12 col-md-6" style="width: 25rem">
        <img
          :src="data.image"
          style="height: 100%; width: 100%; object-fit: contain"
        />
      </div>
      <div class="col-12 col-md-6 px-4 d-flex flex-column">
        <div>
          <div class="m-3">
            <div>
              <div class="product-title" style="font-size: 40px">
                {{ data.title }}
              </div>
              <div class="product-rating">
                <span class="rating">{{ data.rating.rate }} ★</span>
                <span class="review-count"
                  >({{ data.rating.count }} reviews)</span
                >
              </div>
              <span class="product-price" style="font-size: 25px"
                >{{ data.price }} USD</span
              >
            </div>
            <div class="my-4 fw-semibold">{{ data.description }}</div>
          </div>
        </div>
        <div class="row justify-content-end mx-3 mb-4">
          <button
            class="col-auto border-1 rounded-pill border border-warning cart"
            @click="addCart(data.id)"
          >
            <i class="my-2 mx-3 fa-solid fa-cart-plus fa-lg"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "@/stores/cart";

const route = useRoute();
const config = useRuntimeConfig();
const router = useRouter();
const cartStore = useCartStore();

const { data } = await useFetch(
  `${config.public.fakeShopDomain}products/${route.params.id}`
);

onMounted(async () => {
  if (data.value === "") {
    await router.push("/");
  }
});

async function addCart(productId) {
  const config = useRuntimeConfig();
  const cartId = config.public.cartId;

  await useFetch(
    `${config.public.fakeShopCarts}carts/${cartId}/products/${productId}/add`,
    {
      method: "POST",
    }
  );

  cartStore.updateCartProducts();
}
</script>
