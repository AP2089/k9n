import $axios, { AxiosError } from "axios";
import { API_URL } from "@/config";
import router from "@/router";
import useNotification from "@/composables/notification";

const notification = useNotification();

const axios = $axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 404) {
      router.push({ name: "notFound" });
    }

    notification.error((error as AxiosError).message);

    return Promise.reject(error);
  }
);

export default axios;

export * from "axios";
