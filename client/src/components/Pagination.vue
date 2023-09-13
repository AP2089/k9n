<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "@/router";
import Pagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination";

export interface Props {
  totalCount: number | string;
}

export interface ModelValue {
  _page: number;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  (event: "update:modelValue", value: ModelValue): void;
}>();

const route = useRoute();
const page = ref(Number(route.query._page) || 1);
const limit = ref(Number(route.query._limit));

const pages = computed(() => {
  const totalCount = Number(props.totalCount);

  if (limit.value) {
    return Math.ceil(totalCount / limit.value);
  }

  return 0;
});

const onUpdate = (_page: number) => {
  emits("update:modelValue", {
    _page,
  });
};

watch(
  route,
  (value) => {
    page.value = Number(value.query._page);
    limit.value = Number(value.query._limit);
  },
  { deep: true }
);
</script>

<template>
  <Pagination
    v-model="page"
    :pages="pages"
    active-color="#e5e5e5"
    @update:modelValue="onUpdate"
  />
</template>

<style lang="scss" scoped>
:deep(.Page) {
  font-size: 1.4rem;
  border-radius: 0.3rem;
  margin: 0 0.2rem;
  width: 3rem;
  height: 3rem;
  border-width: 0.1rem;
}

:deep(.DotsHolder) {
  font-size: 1.4rem;
  margin: 0 0.2rem;
  width: 3rem;
  height: 3rem;
}

:deep(.Control) {
  width: 1.8rem;
  height: 1.8rem;
  margin: 0 0.2rem;
}

:deep(.Dots) {
  width: 0.8rem;
  height: 0.4rem;
}
</style>
