<script lang="ts" setup>
export interface Props {
  isShow: boolean;
}

defineEmits<{
  (event: "onHide"): void;
}>();

defineProps<Props>();
</script>

<template>
  <Transition name="modal">
    <div class="modal-base" v-if="isShow">
      <div class="modal-base__wrap">
        <div class="modal-base__content">
          <button class="modal-base__btn-close" @click="$emit('onHide')">
            x
          </button>
          <slot />
        </div>
      </div>

      <div class="modal-base__backdrop" @click="$emit('onHide')"></div>
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
.modal-base {
  width: 100%;
  height: 100%;
  padding: 4rem 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  &__wrap {
    width: 40rem;
    margin: 0 auto;
    background-color: $color-white;
    box-shadow: 0 0 1rem 0 $color-other;
    padding: 2rem;
    position: relative;
    z-index: 1;
  }

  &__backdrop {
    width: 100%;
    height: 100%;
    background-color: $color-additional;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 0;
  }

  &__btn-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: 0.1rem solid $color-danger;
    background-color: $color-danger;
    font-size: 1.2rem;
    color: $color-white;
    cursor: pointer;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    z-index: 1;
    transition: color 0.5s ease 0s, background-color 0.5s ease 0s;

    &:hover {
      color: $color-danger;
      background-color: $color-white;
    }
  }
}

.modal-enter-active,
.modal-leave-active {
  opacity: 1;
  transition: opacity 0.5s ease 0s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
