import { Props as Breadcrumbs } from "@/components/Breadcrumbs.vue";

import {
  Props as Feedback,
  FormFields as FeedbackForm,
} from "@/components/Feedback.vue";

export interface Data {
  meta: {
    title: string;
  };
  breadcrumbs: Breadcrumbs["items"];
  title: string;
  description: string;
  feedback: Feedback;
  lat: number;
  lng: number;
}

export interface Store {
  data: Data | undefined;
  onFeatch: () => Promise<void>;
  onSubmit: (payload: FeedbackForm) => Promise<void>;
}

export type { FeedbackForm };
