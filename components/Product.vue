<template>
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
                <div class="row justify-content-end">               
                  <a href="javascript:void(0)" title="Add to cart" @click="addCart(product.id)" class="col-auto  border-1 rounded-pill border border-warning cart"><i class="mx-2 fa-solid fa-cart-plus"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>
<script setup>
import { useCartStore } from '@/stores/cart' 
import { useAlerts } from '@/composables/useAlerts'
const { successAlert } = useAlerts()
const cartStore = useCartStore()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

async function addCart(productId){

  const config = useRuntimeConfig();

  const cartId  = config.public.cartId

  console.log('obtener el id del carro',cartId)
  await useFetch(
    `${config.public.fakeShopCarts}carts/${cartId}/products/${productId}/add`,
    {
      method: 'POST'
    }
  );
  cartStore.updateCartProducts()
  //successAlert('New product in the cart')
}
</script>