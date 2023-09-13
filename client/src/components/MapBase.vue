<script lang="ts" setup>
import { computed } from "vue";
import { YandexMap, YandexMarker } from "vue-yandex-maps";
import { YANDEX_MAP_API_KEY } from "@/config";

export interface Props {
  zoom?: number;
  lat: number;
  lng: number;
}

const props = withDefaults(defineProps<Props>(), {
  zoom: 10,
  lat: 0,
  lng: 0,
});

const settings = computed(() => ({
  apiKey: YANDEX_MAP_API_KEY,
  lang: "ru_RU",
  coordorder: "latlong",
  debug: false,
  version: "2.1",
  zoom: props.zoom,
}));

const coordinates = computed(() => {
  let result: any = [];

  if (props.lat && props.lng) {
    result = [props.lat, props.lng];
  }

  return result;
});
</script>

<template>
  <YandexMap :coordinates="coordinates" :settings="settings">
    <YandexMarker :coordinates="coordinates" :marker-id="1" />
  </YandexMap>
</template>

<style lang="scss" scoped>
.yandex-container {
  overflow: hidden;
  height: 60rem;
}
</style>
