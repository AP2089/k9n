<script lang="ts" setup>
export interface Props {
  isLoading: boolean;
}

defineProps<Props>();
</script>

<template>
  <Transition name="loader">
    <div class="loader" v-if="isLoading">
      <div class="loader__spinner"></div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  &__spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5rem;
    height: 5rem;
    margin: 2rem auto 0 auto;
    background-color: $color-global;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.75);
    border-radius: 0.5rem;

    &:before {
      content: "";
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 50%;
      border: 0.3rem solid;
      border-color: #ffffff;
      border-right-color: $color-success;
      animation: loader 1s infinite linear;
    }
  }
}

@keyframes loader {
  to {
    transform: rotate(1turn);
  }
}

.loader-enter-active,
.loader-leave-active {
  .loader__spinner {
    transform: translateY(0);
    transition: transform 0.5s ease 0s;
  }
}

.loader-enter-from,
.loader-leave-to {
  .loader__spinner {
    transform: translateY(-10rem);
  }
}
</style>
