<template>
  <div>
    <div>
      <strong class="form-label">Order by</strong>
      <div class="form-check mt-2">
        <input @change="byOrder"
        v-model="orderBy"
          class="form-check-input"
          type="radio"
          name="orderBy"
          id="byAsc"
          value="asc"
        />
        <label class="form-check-label" for="byAsc">
          Asc to Desc
        </label>
      </div>
      <div class="form-check">
        <input @change="byOrder"
        v-model="orderBy"
          class="form-check-input"
          type="radio"
          name="orderBy"
          id="byDesc"
          value="desc"
          checked
        />
        <label class="form-check-label" for="byDesc">
          Desc to Asc
        </label>
      </div>
    </div>
    
    <div class="mt-4">
      <strong>Price</strong>
      <div class="row mt-2">
        <label class="col-auto form-label">Min.</label>
        <input class="col form-control" type="number" v-model="priceMin" @change="filterByPrice"/>
      </div>
      <div class="row mt-2">
        <label class="col-auto form-label">Max.</label>
        <input class="col form-control" type="number" v-model="priceMax"  @change="filterByPrice"/>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['orderByPrice', 'filterByPrice'])

const orderBy = ref('')
const priceMin = ref('')
const priceMax = ref('')

function byOrder() {
  emit('orderByPrice', orderBy.value)
}
function filterByPrice(){
    emit('filterByPrice', priceMin.value, priceMax.value)
}
</script>
