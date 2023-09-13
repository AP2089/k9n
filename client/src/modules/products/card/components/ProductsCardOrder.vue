<script lang="ts" setup>
import { inject, reactive, computed } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import {
  StoreProductsCard,
  OrderFormProductsCard,
} from "../types/productsCard.d";
import ModalBase from "@/components/ModalBase.vue";
import FieldTextBase from "@/components/FieldTextBase.vue";
import ButtonBase from "@/components/ButtonBase.vue";

export interface Props {
  isShow: boolean;
}

const emits = defineEmits<{
  (event: "onHide", value: boolean): void;
}>();

defineProps<Props>();

const store = inject("store") as StoreProductsCard;

const formFields = reactive<OrderFormProductsCard>({
  name: "",
  phone: "",
});

const formRules = computed(() => ({
  name: {
    required,
    minLength: minLength(2),
  },
  phone: {
    required,
    minLength: minLength(2),
  },
}));

const v$ = useVuelidate(formRules, formFields);

const onHide = () => {
  emits("onHide", false);
};

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();

  if (isFormCorrect) {
    onHide();
    store.onOrder(formFields);

    for (let key in formFields) {
      formFields[key as keyof typeof formFields] = "";
    }

    v$.value.$reset();
  }
};
</script>

<template>
  <ModalBase :isShow="isShow" @onHide="onHide" class="products-card__order">
    <form action="roducts-card__order-from" @submit.prevent="onSubmit">
      <h5 class="products-card__order-title">{{ $t("order") }}</h5>
      <div class="products-card__order-row">
        <FieldTextBase
          v-model="formFields.name"
          :placeholder="$t('your.name')"
          :error="v$.name.$errors[0]?.$message"
        />
      </div>
      <div class="products-card__order-row">
        <FieldTextBase
          v-model="formFields.phone"
          :placeholder="$t('your.phone')"
          :error="v$.phone.$errors[0]?.$message"
        />
      </div>
      <div class="products-card__order-btn">
        <ButtonBase type="submit">{{ $t("send") }}</ButtonBase>
      </div>
    </form>
  </ModalBase>
</template>

<style lang="scss" scoped>
.products-card {
  &__order {
    &-title {
      font-size: 2.5rem;
    }

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
