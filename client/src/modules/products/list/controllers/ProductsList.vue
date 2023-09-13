<script lang="ts" setup>
import { provide } from "vue";
import View from "../views/ProductsList.vue";
import useStore from "../stores/productsList";
import { StoreProductsList } from "../types/productsList.d";

const store = useStore() as StoreProductsList;

provide("store", store);
</script>

<template>
  <View />
</template>
