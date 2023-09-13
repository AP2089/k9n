import { ref } from "vue";
import { defineStore, acceptHMRUpdate, storeToRefs } from "pinia";
import axios from "@/axios";
import { useRoute } from "@/router";
import {
  DataProductsCard,
  OrderFormProductsCard,
} from "../types/productsCard.d";
import feedbackSubmit from "@/stores/actions/feedbackSubmit";
import useNotification from "@/composables/notification";
import metaHead from "@/utils/metaHead";
import useCore from "@/stores/core";

const useProductsCard = defineStore("productsCard", () => {
  const core = useCore();
  const { currency } = storeToRefs(core);
  const data = ref<DataProductsCard>();
  const isLoading = ref(false);
  const notification = useNotification();
  const route = useRoute();

  const onFeatch = async () => {
    try {
      isLoading.value = true;

      const response = await axios.get(`/products/${route.params.id}`);

      data.value = response.data;
      metaHead(data.value?.meta.title);
    } finally {
      isLoading.value = false;
    }
  };

  const onSubmit = feedbackSubmit({
    isLoading,
  });

  const onOrder = async (payload: OrderFormProductsCard) => {
    try {
      isLoading.value = true;

      const response = await axios.post("/order", {
        id: route.params.id,
        ...payload,
      });

      notification.success(response.data.message);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    data,
    isLoading,
    currency,
    onFeatch,
    onSubmit,
    onOrder,
  };
});

export default useProductsCard;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductsCard, import.meta.hot));
}
