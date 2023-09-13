<script lang="ts" setup>
import { computed, Ref } from "vue";

export interface Props {
  placeholder: string | undefined;
  modelValue: string | undefined;
  type?: "input" | "textarea";
  error?: string | Ref<string> | undefined;
}

const props = withDefaults(defineProps<Props>(), {
  type: "input",
});

const emits = defineEmits<{
  (event: "update:modelValue", value: Props["modelValue"]): void;
}>();

const value = computed({
  get: () => props.modelValue,
  set: (val) => emits("update:modelValue", val),
});

const classes = computed(() => [
  "field-text-base",
  { active: value.value && value.value.length > 0 },
  { error: props.error },
]);
</script>

<template>
  <label :class="classes">
    <div class="field-text-base__wrap">
      <input
        type="text"
        class="field-text-base__field"
        v-model="value"
        v-if="type === 'input'"
      />

      <textarea
        class="field-text-base__field"
        v-model="value"
        v-else-if="type === 'textarea'"
      ></textarea>

      <div class="field-text-base__placeholder">{{ placeholder }}</div>
    </div>
    <div class="field-text-base__error" v-if="error">
      {{ error }}
    </div>
  </label>
</template>

<style lang="scss" scoped>
.field-text-base {
  $rs: &;
  display: block;

  &__wrap {
    position: relative;
  }

  &__field {
    display: block;
    width: 100%;
    background-color: $color-white;
    border: 0.1rem solid $color-secondary;
    border-radius: 0.3rem;
    font-weight: 400;
    font-size: 1.8rem;
    color: $color-global;
    transition: border-color 0.5s ease 0s;

    #{$rs}:hover &,
    &:focus {
      border-color: $color-primary;
    }
  }

  &__placeholder {
    max-width: calc(100% - 3rem);
    white-space: nowrap;
    overflow: hidden;
    cursor: text;
    text-overflow: ellipsis;
    background-color: $color-white;
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 1;
    color: $color-general;
    padding: 0.3rem 0.6rem;
    position: absolute;
    left: 1.5rem;
    z-index: 1;
    transition: font-size 0.1s ease 0s, transform 0.1s ease 0s;
  }

  input#{&}__field {
    height: 4.5rem;
    padding: 0 1.5rem;

    ~ #{$rs}__placeholder {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  textarea#{&}__field {
    height: 20rem;
    padding: 1.2rem 1.5rem;

    ~ #{$rs}__placeholder {
      top: 0;
      transform: translateY(1.1rem);
    }
  }

  &.active &__placeholder,
  &__field:focus ~ &__placeholder {
    font-size: 1.6rem;
  }

  &.active input#{&}__field ~ &__placeholder,
  input#{&}__field:focus ~ &__placeholder {
    transform: translateY(-3.4rem);
  }

  &.active textarea#{&}__field ~ &__placeholder,
  textarea#{&}__field:focus ~ &__placeholder {
    transform: translateY(-1.1rem);
  }

  &.error {
    #{$rs}__field {
      border-color: $color-danger !important;
    }

    #{$rs}__error {
      padding-top: 0.7rem;
      font-size: 1.4rem;
      color: $color-danger;
    }
  }
}
</style>
