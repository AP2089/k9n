<script lang="ts" setup>
import FooterMenu from "./FooterMenu.vue";
import { inject } from "vue";
import { Store } from "./index.d";

const store = inject("store") as Store;
</script>

<template>
  <footer class="footer">
    <div class="footer__center center">
      <div class="footer__wrap">
        <router-link to="/" class="footer__logo">
          <img src="@images/logo.svg" alt="K9N" class="footer__logo-img" />
          <div class="footer__logo-tagline">{{ store.meta?.tagline }}</div>
        </router-link>

        <FooterMenu />

        <div class="footer__copyright">
          {{ $t("copyright") }} &copy; {{ store.meta?.year }}
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: $color-global;
  color: $color-white;

  &__wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3.5rem 0;
  }

  &__logo {
    color: $color-white;
    text-decoration: none;
    opacity: 1;
    margin-right: 1.5rem;
    transition: color 0.5s ease 0s, opacity 0.5s ease 0s;

    &:hover {
      color: $color-white;
      text-decoration: none;
      opacity: 0.7;
    }

    &-img {
      display: block;
      width: 11.4rem;
      height: 4.3rem;
      margin-bottom: 0.5rem;
    }

    &-tagline {
      font-weight: 400;
      font-size: 1.1rem;
      line-height: 1;
    }
  }

  &__copyright {
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: $color-white;
    margin-left: 1.5rem;
  }
}
</style>
