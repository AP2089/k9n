import { Ref } from "vue";
import axios from "@/axios";
import { MetaCore } from "@/stores/core.d";

export interface Options {
  data: Ref<MetaCore | undefined>;
  isLoading: Ref<boolean>;
  url?: string;
}

const URL = "/meta";

export default function metaFeatch({ url = URL, data, isLoading }: Options) {
  return async () => {
    try {
      isLoading.value = true;

      const response = await axios.get(url);
      data.value = response.data;
    } finally {
      isLoading.value = false;
    }
  };
}
