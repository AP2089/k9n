<script lang="ts" setup>
import { onMounted, provide } from "vue";
import Sprite from "@/components/Sprite.vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import useCore from "@/stores/core";
import { StoreCore } from "@/stores/core.d";
import Loader from "@/components/Loader.vue";
import {
  useProductsSearchStore,
  StoreProductsSearch,
} from "@/modules/products";

const core = useCore() as StoreCore;
const { onFeatch: onProductsSearch } =
  useProductsSearchStore() as StoreProductsSearch;

onMounted(() => {
  core.onMetaFeatch();
});

provide("store", core);

provide("actions", {
  onProductsSearch,
});
</script>

<template>
  <Sprite />
  <Loader :isLoading="core.isLoading" />

  <div class="wrap">
    <Header />

    <main class="main">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1 0 auto;
}
</style>
