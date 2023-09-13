import { ref } from "vue";
import { defineStore, acceptHMRUpdate } from "pinia";
import axios from "@/axios";
import { Data } from "../types/contactsDetailed.d";
import feedbackSubmit from "@/stores/actions/feedbackSubmit";
import metaHead from "@/utils/metaHead";

const useContactsDetailed = defineStore("contactsDetailed", () => {
  const data = ref<Data>();
  const isLoading = ref(false);

  const onFeatch = async () => {
    try {
      isLoading.value = true;
      const response = await axios.get("/contacts");

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
    onFeatch,
    onSubmit,
  };
});

export default useContactsDetailed;

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useContactsDetailed, import.meta.hot));
}
