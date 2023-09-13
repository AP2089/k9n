import { Props as Specifications } from "@/components/Specifications.vue";
import { Props as Breadcrumbs } from "@/components/Breadcrumbs.vue";
import { Props as ProductsList } from "@/components/ProductsList.vue";
import { Props as catalogMenu } from "@/components/MenuFilter.vue";

import {
  Props as Feedback,
  FormFields as FeedbackFormProductsList,
} from "@/components/Feedback.vue";

export interface DataProductsList {
  meta: {
    title: string;
  };
  breadcrumbs: Breadcrumbs["items"];
  title: string;
  catalogList: ProductsList["items"];
  catalogMenu: catalogMenu["items"];
  specifications: Specifications;
  feedback: Feedback;
}

export interface StoreProductsList {
  data: DataProductsList | undefined;
  totalCount: number | string;
  isLoading: boolean;
  currency: string;
  onFeatch: (payload?: Record<string, any>) => Promise<void>;
  onSubmit: (payload: FeedbackFormProductsList) => Promise<void>;
}

export type { FeedbackFormProductsList };
