import { FormFields as FeedbackFormCore } from "@/components/Feedback.vue";

export interface MenuMainCore {
  id: number;
  title: string;
  url: string;
}

export interface MetaCore {
  tagline: string;
  phone: string;
  email: string;
  year: string;
  menuMain: MenuMain[];
}

export interface StoreCore {
  meta: Meta | undefined;
  currency: string;
  isLoading: boolean;
  onMetaFeatch: () => Promise<void>;
}

export { FeedbackFormCore };
