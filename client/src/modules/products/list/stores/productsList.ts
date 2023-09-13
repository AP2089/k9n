import { ref } from "vue";
import { defineStore, acceptHMRUpdate, storeToRefs } from "pinia";
import axios from "@/axios";
import { DataProductsList } from "../types/productsList.d";
import feedbackSubmit from "@/stores/actions/feedbackSubmit";
import metaHead from "@/utils/metaHead";
import useUrlSearchParams from "@/composables/urlSearchParams";
import useCore from "@/stores/core";

const useProductsList = defineStore("productsList", () => {
  const core = useCore();
  const { currency } = storeToRefs(core);
  const data = ref<DataProductsList>();
  const isLoading = ref(false);
  const totalCount = ref(0);
  const urlSearchParams = useUrlSearchParams();

  const onFeatch = async (payload: Record<string, any>) => {
    try {
      isLoading.value = true;

      const response = await axios.get("/catalog", {
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

export default useProductsList;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsList, import.meta.hot));
}
