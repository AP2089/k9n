<script lang="ts" setup>
import Pagination from "@/components/Pagination.vue";

export interface Item {
  id: number;
  price: number;
  article: string;
  url: string;
  title: string;
  category: {
    name: string;
    url: string;
    title: string;
  };
}

export interface Props {
  currency: string;
  items: Item[] | undefined;
  totalCount: number | string;
}

export interface Pagination {
  _page: number;
}

defineProps<Props>();

const emits = defineEmits<{
  (event: "update:pagination", value: Pagination): void;
}>();

const onUpdatePagination = (payload: Pagination) => {
  emits("update:pagination", payload);
};
</script>

<template>
  <div class="products-list">
    <div v-if="items?.length" class="products-list__body">
      <div class="products-list__collection">
        <div class="products-list__row products-list__head">
          <div class="products-list__cell">{{ $t("id") }}</div>
          <div class="products-list__cell">{{ $t("title") }}</div>
          <div class="products-list__cell">{{ $t("price") }}</div>
        </div>

        <div v-for="item in items" :key="item.id" class="products-list__row">
          <div class="products-list__cell">{{ item.article }}</div>
          <div class="products-list__cell">
            <router-link :to="item.url" class="products-list__link">
              {{ item.title }}
            </router-link>
          </div>
          <div class="products-list__cell">{{ item.price }} {{ currency }}</div>
        </div>
      </div>

      <Pagination
        :totalCount="totalCount"
        @update:modelValue="onUpdatePagination"
      />
    </div>

    <div v-else class="products-list__message-empty">
      {{ $t("no.products.found") }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-list {
  $rs: &;
  margin-bottom: 4rem;

  &__collection {
    border: 0.1rem solid $color-general;
    margin-bottom: 2rem;
  }

  &__head &__cell {
    background-color: $color-excess;
  }

  &__row {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    border-bottom: 0.1rem solid $color-general;

    &:last-child {
      border-bottom: none;
    }
  }

  &__cell {
    border-right: 0.1rem solid $color-general;
    padding: 1rem;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: $color-global;

    &:last-child {
      border-right: none;
    }
  }

  &__link {
    text-decoration: none;
    color: $color-primary;
    transition: color 0.5s ease 0s;

    &:hover {
      text-decoration: none;
      color: $color-success;
    }
  }

  &__message-empty {
    font-style: italic;
  }
}
</style>
