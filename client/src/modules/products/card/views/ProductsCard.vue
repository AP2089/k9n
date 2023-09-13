<script lang="ts" setup>
import { onMounted, inject } from "vue";
import Feedback from "@/components/Feedback.vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import ProductsCardPicture from "../components/ProductsCardPicture.vue";
import ProductsCardInfo from "../components/ProductsCardInfo.vue";
import ProductsCardDescription from "../components/ProductsCardDescription.vue";
import { StoreProductsCard } from "../types/productsCard.d";

const store = inject("store") as StoreProductsCard;

onMounted(() => {
  store.onFeatch();
});
</script>

<template>
  <div class="products-card">
    <Breadcrumbs :items="store.data?.breadcrumbs" />

    <div class="products-card__center center">
      <div class="products-card__narrow narrow">
        <h1 class="products-card__heading">{{ store.data?.title }}</h1>

        <div class="products-card__wrap">
          <ProductsCardPicture />
          <ProductsCardInfo />
        </div>

        <ProductsCardDescription />
      </div>
    </div>

    <Feedback
      :title="store.data?.feedback.title"
      :description="store.data?.feedback.description"
      @onSubmit="store.onSubmit"
    />
  </div>
</template>

<style lang="scss" scoped>
.products-card {
  &__heading {
    font-weight: 700;
    font-size: 3.6rem;
    line-height: 4.2rem;
    color: $color-global;
    margin: 0 0 2.1rem 0;
  }

  &__wrap {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: 0 3rem;
    grid-template-areas: "picture info";
    margin-bottom: 3rem;
  }
}
</style>
