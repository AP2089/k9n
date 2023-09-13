import { reactive, computed } from "vue";
import { useRoute, useRouter } from "@/router";

export type Params = Record<string, any>;

export default function useUrlSearchParams(options: Params = {}) {
  const route = useRoute();
  const router = useRouter();

  const data = reactive<Params>({
    _page: 1,
    _limit: 10,
    ...options,
    ...route.query,
  });

  const setParams = (payload: Params) => {
    for (let key in payload) {
      data[key] = payload[key];
    }
  };

  const params = computed(() => {
    const result = {} as Params;

    for (let key in data) {
      if (data[key] !== "all") {
        result[key] = data[key];
      }
    }

    return result;
  });

  return (payload: Params) => {
    setParams({
      ...route.query,
      ...payload,
    });

    router.push({ query: params.value });

    return params.value;
  };
}
