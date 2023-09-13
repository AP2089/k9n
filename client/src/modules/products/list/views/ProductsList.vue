<script lang="ts" setup>
import { onMounted, inject } from "vue";
import Specifications from "@/components/Specifications.vue";
import Feedback from "@/components/Feedback.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import MenuFilter from "@/components/MenuFilter.vue";
import ProductsList from "@/components/ProductsList.vue";
import { StoreProductsList } from "../types/productsList.d";

const store = inject("store") as StoreProductsList;

onMounted(() => {
  store.onFeatch();
});
</script>

<template>
  <div class="products-list">
    <Breadcrumbs :items="store.data?.breadcrumbs" />

    <div class="products-list__center center">
      <div class="products-list__narrow narrow">
        <h1 class="products-list__heading heading-base">
          {{ store.data?.title }}
        </h1>

        <MenuFilter
          :items="store.data?.catalogMenu"
          @update="store.onFeatch"
          paramActive="category.name"
        />

        <ProductsList
          :items="store.data?.catalogList"
          :totalCount="store.totalCount"
          :currency="store.currency"
          @update:pagination="store.onFeatch"
        />
      </div>
    </div>

    <Specifications
      :items="store.data?.specifications.items"
      :background="store.data?.specifications.background"
    />

    <Feedback
      :title="store.data?.feedback.title"
      :description="store.data?.feedback.description"
      @onSubmit="store.onSubmit"
    />
  </div>
</template>
