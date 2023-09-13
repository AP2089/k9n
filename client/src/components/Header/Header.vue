<script lang="ts" setup>
import HeaderContacts from "./HeaderContacts.vue";
import HeaderMenu from "./HeaderMenu.vue";
import Search from "@/components/Search.vue";
import { inject } from "vue";
import { Store, Actions } from "./index.d";

const store = inject("store") as Store;
const actions = inject("actions") as Actions;
</script>

<template>
  <header class="header">
    <div class="header__main">
      <div class="header__center center">
        <div class="header__wrap">
          <router-link to="/" class="header__logo">
            <img src="@images/logo.svg" alt="K9N" class="header__logo-img" />
            <div class="header__logo-tagline">{{ store.meta?.tagline }}</div>
          </router-link>

          <Search
            :example="$t('example.text')"
            redirect="/search"
            @submit="actions.onProductsSearch"
            class="header__search"
          />

          <HeaderContacts />
        </div>
      </div>
    </div>
    <HeaderMenu />
  </header>
</template>

<style lang="scss" scoped>
.header {
  &__main {
    padding: 3rem 0;
    border-bottom: 0.1rem solid $color-special;
    background-color: $color-special;
    background-repeat: no-repeat;
    background-position: center top;
    background-image: url(@images/bg/header-bg.jpg);
    background-size: cover;

    @include media-retina() {
      background-image: url(@images/bg/header-bg@2x.jpg);
    }
  }

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    color: $color-global;
    text-decoration: none;
    opacity: 1;
    margin-right: 1.5rem;
    transition: color 0.5s ease 0s, opacity 0.5s ease 0s;

    &:hover {
      color: $color-global;
      text-decoration: none;
      opacity: 0.7;
    }

    &-img {
      display: block;
      width: 18.5rem;
      height: 7rem;
      margin-bottom: 0.7rem;
    }

    &-tagline {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.6rem;
    }
  }

  &__search {
    width: 64rem;
  }
}
</style>
