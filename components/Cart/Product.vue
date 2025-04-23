<template>
  <div class="col-auto">
    <div style="height: 150px; width: 100px">
      <img
        :src="product.image"
        style="height: 100%; width: 100%; object-fit: contain"
      />
    </div>
  </div>
  <div class="col">
    <div class="row" style="height: 100%">
      <div class="col">
        {{ product.title }}
      </div>
      <div class="col-auto">
        <div class="input-group row">
          <button class="col-auto btn btn-outline-secondary" type="button" @click="decrement(product.id)">
            <i class="fa-solid fa-minus"></i>
          </button>
          <input
            type="number"
            class="col border border-secondary text-center"
            v-model.number="quantity"
            style="max-width: 100px"
            disabled
          />
          <button class="col-auto btn btn-outline-secondary" type="button" @click="increment(product.id)">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div class="col-3 text-end d-flex flex-column" style="height: 100%">
        <div class="flex-grow-1">{{ product.price }} USD</div>
        <div>
          <a
            href="javascript:void(0)"
            title="Delete" 
            @click="$emit('delete'); deleteProduct(product.id)"
          >
            <i class="fa-solid fa-trash-can" style="color: red"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useCartStore } from "@/stores/cart";

const config = useRuntimeConfig();
const cartStore = useCartStore();
const cartId = config.public.cartId;

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

let quantity = ref(props.product.quantity);

async function decrement(productId) {

  if(quantity.value == 1){
    return
  }  
  quantity.value--
  const body = { quantity: quantity.value };

  await useFetch(
    `${config.public.fakeShopCarts}carts/${cartId}/products/${productId}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
    }
  );

  cartStore.updateCartProducts();
}

async function increment(productId) {
  quantity.value++
  const body = { quantity: quantity.value };

  await useFetch(
    `${config.public.fakeShopCarts}carts/${cartId}/products/${productId}`,
    {
      method: "PUT",
      body: JSON.stringify(body),
    }
  );

  cartStore.updateCartProducts();
}

async function deleteProduct(productId) {

    await useFetch(
    `${config.public.fakeShopCarts}carts/${cartId}/products/${productId}`,
    {
      method: "DELETE",
    }
  );

  cartStore.updateCartProducts();

}
</script>
