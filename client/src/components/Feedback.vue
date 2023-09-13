<script lang="ts" setup>
import { computed, reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import FieldTextBase from "./FieldTextBase.vue";
import ButtonBase from "./ButtonBase.vue";

export interface FormFields {
  name: string;
  contact: string;
  message: string;
}

export interface Props {
  title: string | undefined;
  description?: string | undefined;
}

defineProps<Props>();

const emits = defineEmits<{
  (event: "onSubmit", value: FormFields): void;
}>();

const formFields = reactive<FormFields>({
  name: "",
  contact: "",
  message: "",
});

const formRules = computed(() => ({
  name: {
    required,
    minLength: minLength(2),
  },
  contact: {
    required,
    minLength: minLength(2),
  },
  message: {
    required,
    minLength: minLength(2),
  },
}));

const v$ = useVuelidate(formRules, formFields);

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    emits("onSubmit", formFields);

    for (let key in formFields) {
      formFields[key as keyof typeof formFields] = "";
    }

    v$.value.$reset();
  }
};
</script>

<template>
  <div class="feedback">
    <div class="feedback__center center">
      <div class="feedback__wrap">
        <div class="feedback__content">
          <div class="feedback__title heading-base">{{ title }}</div>
          <div class="feedback__description" v-html="description"></div>
        </div>
        <form class="feedback__form" @submit.prevent="onSubmit">
          <div class="feedback__form-row">
            <FieldTextBase
              v-model="formFields.name"
              :placeholder="$t('your.name')"
              :error="v$.name.$errors[0]?.$message"
            />
          </div>
          <div class="feedback__form-row">
            <FieldTextBase
              v-model="formFields.contact"
              :placeholder="$t('your.phone.or.email')"
              :error="v$.contact.$errors[0]?.$message"
            />
          </div>
          <div class="feedback__form-row">
            <FieldTextBase
              type="textarea"
              v-model="formFields.message"
              :placeholder="$t('message')"
              :error="v$.message.$errors[0]?.$message"
            />
          </div>
          <div class="feedback__form-btn">
            <ButtonBase type="submit">{{ $t("send") }}</ButtonBase>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feedback {
  padding: 9rem 0;

  &__wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0 30rem;
    width: 111rem;
    margin: 0 auto;
  }

  &__title {
    align-items: flex-start;
  }

  &__description {
    font-weight: 400;
    font-size: 1.8rem;
    line-height: 2.1rem;
    color: $color-base;

    :deep(a) {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  &__form {
    &-row {
      margin-bottom: 2.8rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &-btn {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>
