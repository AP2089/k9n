<script lang="ts" setup>
import { onMounted } from "vue";
import { useI18n } from "vue-i18n";
import Base from "@/layouts/Base.vue";
import ButtonBase from "@/components/ButtonBase.vue";
import metaHead from "@/utils/metaHead";

const { t } = useI18n();

onMounted(() => {
  metaHead(t("page.not.found"));
});
</script>

<template>
  <Base>
    <div class="not-found">
      <div class="not-found__center center">
        <h1 class="not-found__heading">{{ $t("page.not.found") }}</h1>
        <div class="not-found__description">
          {{ $t("page.not.found.back") }}
          <ButtonBase to="/">{{ $t("page.not.found.home") }}</ButtonBase>
        </div>
      </div>
    </div>
  </Base>
</template>

<style lang="scss" scoped>
.not-found {
  padding: 5rem;

  &__heading {
    font-size: 4rem;
    margin-bottom: 4rem;
  }
}
</style>
