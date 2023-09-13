<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

export interface Item {
  id: string;
  url: string;
  title: string;
  isActive?: boolean;
}

export interface Props {
  paramActive: string;
  items: Item[] | undefined;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  (event: "update", value: Record<string, any>): void;
}>();

const route = useRoute();

const onClick = (item: Item) => {
  const [_url, params] = item.url.split("?");
  const parseParams = Object.fromEntries(new URLSearchParams(params));

  emits("update", {
    ...parseParams,
    _page: 1,
  });
};

const data = computed(() => {
  return props.items?.map((item, i) => {
    const paramActiveVal = route.query[props.paramActive];
    const isActive = paramActiveVal ? paramActiveVal === item.id : i === 0;

    return {
      ...item,
      isActive,
    };
  });
});
</script>

<template>
  <nav class="menu-base">
    <ul class="menu-base__list">
      <li v-for="item in data" :key="item.id" class="menu-base__item">
        <button
          type="button"
          :class="['menu-base__button', { active: item.isActive }]"
          @click="onClick(item)"
        >
          {{ item.title }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu-base {
  margin-bottom: 3rem;

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  &__item {
    margin: 0 0.5rem 1rem 0.5rem;
    padding: 0;
  }

  &__button {
    display: block;
    text-decoration: none;
    padding: 1rem 1.3rem;
    color: $color-success;
    border: 0.1rem solid $color-success;
    background-color: $color-white;
    cursor: pointer;
    transition: color 0.5s ease 0s, background-color 0.5s ease 0s;

    &:hover,
    &.active {
      color: $color-white;
      background-color: $color-success;
    }
  }
}
</style>
