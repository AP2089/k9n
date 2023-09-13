import { ref, computed } from "vue";
import { defineStore, acceptHMRUpdate, getActivePinia } from "pinia";
import metaFeatch from "@/stores/actions/metaFeatch";
import { CURRENCY } from "@/config";
import { MetaCore } from "./core.d";

const useCore = defineStore("core", () => {
  const storesActive = getActivePinia();
  const meta = ref<MetaCore>();
  const isLoading = ref(false);
  const currency = ref(CURRENCY);

  const onMetaFeatch = metaFeatch({
    data: meta,
    isLoading,
  });

  const isLoadings = computed(() => {
    const values = [];

    if (storesActive) {
      const data = storesActive.state.value;

      for (const key in data) {
        const value = data[key].isLoading;

        if (value) {
          values.push(value);
        }
      }
    }

    return values.length > 0;
  });

  return {
    meta,
    currency,
    isLoading: isLoadings,
    onMetaFeatch,
  };
});

export default useCore;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCore, import.meta.hot));
}
