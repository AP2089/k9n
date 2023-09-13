import { Props as Breadcrumbs } from "@/components/Breadcrumbs.vue";
import { Props as ProductsList } from "@/components/ProductsList.vue";

import {
  Props as Feedback,
  FormFields as FeedbackFormProductsSearch,
} from "@/components/Feedback.vue";

export interface DataProductsSearch {
  meta: {
    title: string;
  };
  breadcrumbs: Breadcrumbs["items"];
  title: string;
  feedback: Feedback;
  items: ProductsList["items"];
}

export interface StoreProductsSearch {
  data: DataProductsSearch | undefined;
  totalCount: number | string;
  isLoading: boolean;
  currency: string;
  onFeatch: (payload?: Record<string, any>) => Promise<void>;
  onSubmit: (payload: FeedbackFormProductsSearch) => Promise<void>;
}

export type { FeedbackFormProductsSearch };
