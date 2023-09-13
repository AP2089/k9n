import { ref } from "vue";
import { defineStore, acceptHMRUpdate, storeToRefs } from "pinia";
import axios from "@/axios";
import { DataProductsSearch } from "../types/productsSearch.d";
import feedbackSubmit from "@/stores/actions/feedbackSubmit";
import metaHead from "@/utils/metaHead";
import useUrlSearchParams from "@/composables/urlSearchParams";
import useCore from "@/stores/core";

const useProductsSearch = defineStore("productsSearch", () => {
  const core = useCore();
  const { currency } = storeToRefs(core);
  const data = ref<DataProductsSearch>();
  const isLoading = ref(false);
  const totalCount = ref(0);
  const urlSearchParams = useUrlSearchParams();

  const onFeatch = async (payload: Record<string, any>) => {
    try {
      isLoading.value = true;

      const response = await axios.get("/search", {
        params: urlSearchParams(payload),
      });

      totalCount.value = response.headers["x-total-count"];
      data.value = response.data;
      metaHead(data.value?.meta.title);
    } finally {
      isLoading.value = false;
    }
  };

  const onSubmit = feedbackSubmit({
    isLoading,
  });

  return {
    data,
    isLoading,
    totalCount,
    currency,
    onFeatch,
    onSubmit,
  };
});

export default useProductsSearch;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsSearch, import.meta.hot));
}
