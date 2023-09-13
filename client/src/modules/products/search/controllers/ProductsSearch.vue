<script lang="ts" setup>
import { provide } from "vue";
import View from "../views/ProductsSearch.vue";
import useStore from "../stores/productsSearch";
import { StoreProductsSearch } from "../types/productsSearch.d";

const store = useStore() as StoreProductsSearch;

provide("store", store);
</script>

<template>
  <View />
</template>
