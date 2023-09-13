<script lang="ts" setup>
import { onMounted, inject } from "vue";
import Breadcrumbs from "@/components/Breadcrumbs.vue";
import Feedback from "@/components/Feedback.vue";
import MapBase from "@/components/MapBase.vue";
import { Store } from "../types/contactsDetailed.d";

const store = inject("store") as Store;

onMounted(() => {
  store.onFeatch();
});
</script>

<template>
  <div class="contacts-detailed">
    <Breadcrumbs :items="store.data?.breadcrumbs" />

    <Feedback
      :title="store.data?.title"
      :description="store.data?.description"
      @onSubmit="store.onSubmit"
      class="contacts-detailed__feedback"
    />

    <MapBase :lat="store.data?.lat" :lng="store.data?.lng" />
  </div>
</template>

<style lang="scss" scoped>
.contacts-detailed {
  &__feedback {
    padding-top: 2rem;
  }
}
</style>
