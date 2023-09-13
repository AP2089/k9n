import { Props as SliderMain } from "@/components/SliderMain.vue";
import { Props as CatalogCategories } from "@/components/Catalog.vue";
import { Props as Specifications } from "@/components/Specifications.vue";

import {
  Props as Feedback,
  FormFields as FeedbackForm,
} from "@/components/Feedback.vue";

export interface Data {
  meta: {
    title: string;
  };
  sliderMain: SliderMain["items"];
  catalogCategories: CatalogCategories["items"];
  specifications: Specifications;
  feedback: Feedback;
}

export interface Store {
  data: Data | undefined;
  onFeatch: () => Promise<void>;
  onSubmit: (payload: FeedbackForm) => Promise<void>;
}

export type { FeedbackForm };
