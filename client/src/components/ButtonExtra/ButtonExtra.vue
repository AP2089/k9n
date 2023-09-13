<script lang="ts" setup>
import ButtonExtraIcon from "./ButtonExtraIcon.vue";

export interface Props {
  type?: "button" | "submit" | "reset";
  to?: string;
}

withDefaults(defineProps<Props>(), {
  type: "button",
});
</script>

<template>
  <router-link v-if="to" :to="to" class="button-extra">
    <slot />
    <ButtonExtraIcon />
  </router-link>

  <button v-else :type="type" class="button-extra">
    <slot />
    <ButtonExtraIcon />
  </button>
</template>

<style lang="scss" scoped>
.button-extra {
  $rs: &;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: $color-primary;
  opacity: 1;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.5s ease 0s;

  &:hover {
    color: $color-primary;
    opacity: 0.7;
    text-decoration: none;

    #{$rs}__icon {
      transform: translateX(0.2rem);
    }
  }

  &__icon {
    width: 1rem;
    height: 1.4rem;
    margin-left: 1rem;
    transform: translateX(0);
    transition: transform 0.5s ease 0s;
  }
}
</style>
