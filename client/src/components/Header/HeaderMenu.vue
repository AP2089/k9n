<script lang="ts" setup>
import { inject } from "vue";
import { Store } from "./index.d";

const store = inject("store") as Store;
</script>

<template>
  <nav class="header__menu">
    <div class="header__center center">
      <ul class="header__menu-list">
        <li
          class="header__menu-item"
          v-for="item in store.meta?.menuMain"
          :key="item.id"
        >
          <router-link :to="item.url" class="header__menu-link">
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.header__menu {
  border-bottom: 0.1rem solid $color-special;
  background-color: $color-white;

  &-list {
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    list-style: none;
    margin: 0 0 -0.1rem 0;
    padding: 0;
  }

  &-item {
    display: flex;
    margin: 0 0.1rem 0 0;
    padding: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &-link {
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.8rem;
    color: $color-base;
    text-decoration: none;
    padding: 1.7rem 3rem;
    border-bottom: 0.3rem solid transparent;
    transition: color 0.5s ease 0s, border-color 0.5s ease 0s;

    &:hover,
    &.active {
      color: $color-success;
      border-bottom-color: $color-success;
      text-decoration: none;
    }

    &.active {
      font-weight: 500;
    }
  }
}
</style>
