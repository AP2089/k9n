<script lang="ts" setup>
import { onMounted, inject } from "vue";
import Feedback from "@/components/Feedback.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import ProductsList from "@/components/ProductsList.vue";
import { StoreProductsSearch } from "../types/productsSearch.d";

const store = inject("store") as StoreProductsSearch;

onMounted(() => {
  store.onFeatch();
});
</script>

<template>
  <div class="products-search">
    <Breadcrumbs :items="store.data?.breadcrumbs" />

    <div class="products-search__center center">
      <div class="products-search__narrow narrow">
        <h1 class="products-search__heading heading-base">
          {{ store.data?.title }}
        </h1>

        <ProductsList
          :items="store.data?.items"
          :totalCount="store.totalCount"
          :currency="store.currency"
          @update:pagination="store.onFeatch"
        />
      </div>
    </div>

    <Feedback
      :title="store.data?.feedback.title"
      :description="store.data?.feedback.description"
      @onSubmit="store.onSubmit"
    />
  </div>
</template>
