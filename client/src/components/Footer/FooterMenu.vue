<script lang="ts" setup>
import { inject } from "vue";
import { Store } from "./index.d";

const store = inject("store") as Store;
</script>

<template>
  <nav class="footer__menu">
    <ul class="footer__menu-list">
      <li
        class="footer__menu-item"
        v-for="item in store.meta?.menuMain"
        :key="item.id"
      >
        <router-link :to="item.url" class="footer__menu-link">
          {{ item.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.footer__menu {
  &-list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &-item {
    padding: 0;
    margin: 0 5rem 0 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &-link {
    color: $color-white;
    text-decoration: none;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.9rem;
    transition: color 0.5s ease 0s;

    &:hover,
    &.active {
      color: $color-success;
      text-decoration: none;
    }
  }
}
</style>
