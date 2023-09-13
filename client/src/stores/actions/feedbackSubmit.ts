import { Ref } from "vue";
import axios from "@/axios";
import useNotification from "@/composables/notification";
import { FormFields } from "@/components/Feedback.vue";

export interface Options {
  isLoading: Ref<boolean>;
  url?: string;
}

const URL = "/feedback";

export default function feedbackSubmit({ url = URL, isLoading }: Options) {
  const notification = useNotification();

  return async (payload: FormFields) => {
    try {
      isLoading.value = true;
      const response = await axios.post(url, payload);

      notification.success(response.data.message);
    } finally {
      isLoading.value = false;
    }
  };
}
