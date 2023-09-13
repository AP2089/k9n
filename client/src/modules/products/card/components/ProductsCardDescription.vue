<script lang="ts" setup>
import { inject } from "vue";
import { StoreProductsCard } from "../types/productsCard.d";

const store = inject("store") as StoreProductsCard;
</script>

<template>
  <div class="products-card__description">
    <div class="products-card__description-heading">
      {{ $t("product.description") }}
    </div>
    <div
      class="products-card__description-content"
      v-html="store.data?.description"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.products-card {
  &__description {
    margin-bottom: 2rem;

    &-heading {
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 3.3rem;
      color: $color-global;
      margin-bottom: 1.5rem;
    }

    &-content {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.1rem;
      color: $color-global;
    }
  }
}
</style>
