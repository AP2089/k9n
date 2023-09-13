<script lang="ts" setup>
import { inject } from "vue";
import { StoreProductsCard } from "../types/productsCard.d";
import imageSrcset from "@/utils/imageSrcset";

const store = inject("store") as StoreProductsCard;
</script>

<template>
  <picture class="products-card__picture">
    <source type="image/webp" :srcset="imageSrcset(store.data?.image.webp)" />
    <img
      :src="store.data?.image.any[0]"
      :srcset="imageSrcset(store.data?.image.any)"
      :alt="store.data?.title"
      class="products-card__picture-img"
      loading="lazy"
    />
  </picture>
</template>

<style lang="scss" scoped>
.products-card {
  &__picture {
    grid-area: picture;
    align-self: start;
    border: 0.1rem solid $color-special;
    padding: 2rem;

    &-img {
      display: block;
      margin: 0 auto;
    }
  }
}
</style>
