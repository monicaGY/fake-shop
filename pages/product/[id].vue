<template>
  <Header></Header>
  <div v-if="data !== ''">
    <div class="row d-flex justify-content-center">
      <div class="col-12 col-md-6" style="width: 20rem">
        <img
          :src="data.image"
          style="height: 100%; width: 100%; object-fit: contain"
        />
      </div>
      <div class="col-12 col-md-6">
        <div>
          <div class="product-title" style="font-size: 30px">
            {{ data.title }}
          </div>
          <div class="product-rating">
            <span class="rating">{{ data.rating.rate }} ★</span>
            <span class="review-count">({{ data.rating.count }} reviews)</span>
          </div>
          <span class="product-price" style="font-size: 25px"
            >{{ data.price }} USD</span
          >
        </div>
        <div>{{ data.description }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>

const route = useRoute();
const config = useRuntimeConfig();
const router = useRouter();

const { data} = await useFetch(`${config.public.fakeShopDomain}products/${route.params.id}`)

onMounted(async () => {
  if (data.value === '') {
    await router.push('/') 
  }
})
</script>
