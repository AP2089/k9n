<script lang="ts" setup>
import { inject, computed } from "vue";
import { Store } from "./index.d";

const store = inject("store") as Store;
const tel = computed(() => `tel:${store.meta?.phone.replace(/\s|-+/g, "")}`);
const mailto = computed(() => `mailto:${store.meta?.email}`);
</script>

<template>
  <div class="header__contacts">
    <div class="header__contacts-title">{{ $t("call.us") }}</div>
    <div class="header__contacts-phone" v-if="store.meta?.phone">
      <a :href="tel" class="header__contacts-phone-link">
        <svg class="header__contacts-phone-icon">
          <use xlink:href="#phone"></use>
        </svg>
        {{ store.meta?.phone }}
      </a>
    </div>
    <div class="header__contacts-email" v-if="store.meta?.email">
      <a :href="mailto" class="header__contacts-email-link">
        {{ store.meta?.email }}
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header__contacts {
  text-align: right;

  &-title {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: $color-factory;
    margin-bottom: 0.7rem;
  }

  &-phone {
    margin-bottom: 0.3rem;

    &-link {
      display: grid;
      grid-template-columns: 2rem 1fr;
      align-items: center;
      column-gap: 1.4rem;
      text-decoration: none;
      font-weight: 500;
      font-size: 2.4rem;
      line-height: 2.8rem;
      color: $color-global;
      transition: color 0.5s ease 0s;

      &:hover {
        color: $color-success;
        text-decoration: none;
      }
    }

    &-icon {
      color: $color-success;
      width: 2rem;
      height: 2rem;
    }
  }

  &-email {
    &-link {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.9rem;
      color: $color-global;
      text-decoration: none;
      transition: color 0.5s ease 0s;

      &:hover {
        text-decoration: none;
        color: $color-success;
      }
    }
  }
}
</style>
