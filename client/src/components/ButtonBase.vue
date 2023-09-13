<script lang="ts" setup>
export interface Props {
  type?: "button" | "submit" | "reset";
  to?: string;
}

withDefaults(defineProps<Props>(), {
  type: "button",
});
</script>

<template>
  <router-link v-if="to" :to="to" class="button-base">
    <slot />
  </router-link>

  <button v-else :type="type" class="button-base">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.button-base {
  $rs: &;
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: $color-white;
  border-radius: 0.3rem;
  border: 0.1rem solid $color-success;
  outline: none;
  padding: 0 3.4rem;
  height: 4.4rem;
  background-color: $color-success;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.5s ease 0s, background-color 0.5s ease 0s;

  &:hover {
    color: $color-success;
    background-color: $color-white;
    text-decoration: none;
  }
}
</style>
