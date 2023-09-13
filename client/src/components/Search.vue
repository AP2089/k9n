<script lang="ts" setup>
import { ref } from "vue";
import { useRoute, useRouter } from "@/router";

export interface Props {
  redirect?: string;
  example?: string;
}

export interface Submit {
  q: string;
}

const props = defineProps<Props>();

const emits = defineEmits<{
  (event: "submit", value: Submit): void;
}>();

const route = useRoute();
const router = useRouter();
const q = ref("");

const onSubmit = () => {
  if (props.redirect && props.redirect !== route.path) {
    router.push({
      path: props.redirect,
      query: { q: q.value },
    });
  } else {
    emits("submit", {
      q: q.value,
    });
  }
};

const setTextExample = () => {
  if (props.example) {
    q.value = props.example;
  }
};
</script>

<template>
  <form class="search" @submit.prevent="onSubmit">
    <div class="search__wrap">
      <input
        type="text"
        placeholder="Найти товары"
        class="search__field"
        v-model="q"
      />
      <button type="submit" class="search__button">{{ $t("search") }}</button>
    </div>
    <div class="search__example" v-if="example">
      {{ $t("example") }}:
      <span class="search__example-link" @click="setTextExample">
        {{ example }}
      </span>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.search {
  &__wrap {
    display: grid;
    grid-template-columns: 1fr 12rem;
  }

  &__field {
    height: 4.4rem;
    padding: 0 1.5rem;
    background-color: $color-white;
    border: 0.1rem solid $color-secondary;
    border-right: none;
    border-radius: 0.3rem 0 0 0.3rem;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: $color-global;
    transition: border-color 0.5s ease 0s;

    &:hover,
    &:focus {
      border-color: $color-primary;
    }

    @include placeholder() {
      color: $color-general;
    }
  }

  &__button {
    cursor: pointer;
    background-color: $color-success;
    border: 0.1rem solid $color-success;
    border-radius: 0 0.3rem 0.3rem 0;
    color: $color-white;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    transition: background-color 0.5s ease 0s, color 0.5s ease 0s;

    &:hover {
      background-color: $color-white;
      color: $color-success;
    }
  }

  &__example {
    margin-top: 0.9rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: $color-general;

    &-link {
      cursor: pointer;
      color: $color-primary;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
