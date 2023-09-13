<script lang="ts" setup>
import { onMounted, inject } from "vue";
import SliderMain from "@/components/SliderMain.vue";
import Catalog from "@/components/Catalog.vue";
import Specifications from "@/components/Specifications.vue";
import Feedback from "@/components/Feedback.vue";
import { Store } from "../types/welcomeList.d";

const store = inject("store") as Store;

onMounted(() => {
  store.onFeatch();
});
</script>

<template>
  <div class="welcome">
    <SliderMain :items="store.data?.sliderMain" />

    <Catalog
      :heading="$t('product.catalog')"
      :items="store.data?.catalogCategories"
    />

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
