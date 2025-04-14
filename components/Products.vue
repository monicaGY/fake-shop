<template>
    <div class="row m-auto">
        <FilterProducts @orderByPrice="orderByPrice" class="col-2" @filterByPrice="filterByPrice"></FilterProducts>
        <ListProducts :orderBy="orderBy" class="col-10" :priceMin="priceMin" :priceMax="priceMax"></ListProducts>
    </div>
    
</template>
<script setup>
import { ref } from 'vue'

const orderBy = ref('')
const priceMin = ref('')
const priceMax = ref('')
function orderByPrice(option){
    orderBy.value = option
}
function filterByPrice(min, max){
    priceMin.value = min
    priceMax.value = max
}
</script>