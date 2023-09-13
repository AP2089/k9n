<script lang="ts" setup>
import { provide } from "vue";
import View from "../views/ProductsCard.vue";
import useStore from "../stores/productsCard";
import { StoreProductsCard } from "../types/productsCard.d";

const store = useStore() as StoreProductsCard;

provide("store", store);
</script>

<template>
  <View />
</template>
