<script lang="ts" setup>
import { ref, inject } from "vue";
import { StoreProductsCard } from "../types/productsCard.d";
import ButtonBase from "@/components/ButtonBase.vue";
import ProductsCardOrder from "./ProductsCardOrder.vue";

const store = inject("store") as StoreProductsCard;

const isShow = ref(false);
</script>

<template>
  <div class="products-card__info">
    <div class="products-card__info-order">
      <div class="products-card__info-price">
        {{ $t("price") }}
        <div class="products-card__info-price-val">
          {{ store.data?.price }} {{ store.currency }}
        </div>
      </div>

      <ButtonBase @click="isShow = true">{{ $t("buy") }}</ButtonBase>
    </div>

    <div class="products-card__info-heading">{{ $t("main.features") }}</div>
    <div class="products-card__info-list">
      <div
        v-for="item in store.data?.specifications"
        :key="item.id"
        class="products-card__info-item"
      >
        <div class="products-card__info-title">{{ item.title }}</div>
        <div class="products-card__info-value">{{ item.value }}</div>
      </div>
    </div>

    <ProductsCardOrder :isShow="isShow" @onHide="isShow = false" />
  </div>
</template>

<style lang="scss" scoped>
.products-card {
  &__info {
    grid-area: info;
    align-self: start;

    &-order {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-bottom: 3rem;
    }

    &-price {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 1.8rem;
      line-height: 1;
      margin-right: 3rem;

      &-val {
        font-size: 3rem;
        line-height: 1;
        color: $color-success;
        margin-left: 1rem;
      }
    }

    &-heading {
      font-weight: 700;
      font-size: 2.8rem;
      line-height: 3.3rem;
      color: $color-global;
      margin-bottom: 1.5rem;
    }

    &-list {
      margin-bottom: 2rem;
    }

    &-item {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 0 3rem;
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2.1rem;
      margin-bottom: 1.2rem;
    }

    &-title {
      color: $color-success;
    }

    &-value {
      color: $color-base;
    }
  }
}
</style>
