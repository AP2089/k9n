import { Props as Breadcrumbs } from "@/components/Breadcrumbs.vue";

import {
  Props as Feedback,
  FormFields as FeedbackFormProductsCard,
} from "@/components/Feedback.vue";

export interface OrderFormProductsCard {
  name: string;
  phone: string;
}

export interface SpecificationsProductsCard {
  id: number;
  title: string;
  value: string;
}

export interface DataProductsCard {
  meta: {
    title: string;
  };
  breadcrumbs: Breadcrumbs["items"];
  id: number;
  title: string;
  description: string;
  article: string;
  price: number;
  category: string;
  image: {
    any: string[];
    webp: string[];
  };
  specifications: SpecificationsProductsCard[];
  feedback: Feedback;
}

export interface StoreProductsCard {
  data: DataProductsCard | undefined;
  currency: string;
  isLoading: boolean;
  onFeatch: () => Promise<void>;
  onSubmit: (payload: FeedbackForm) => Promise<void>;
  onOrder: (payload: OrderForm) => Promise<void>;
}

export type { FeedbackFormProductsCard };
