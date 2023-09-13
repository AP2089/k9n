import { createI18n } from "vue-i18n";
import { LOCALE } from "@/config";
import ru from "./ru.json";

export default createI18n({
  locale: LOCALE,
  fallbackLocale: LOCALE,
  allowComposition: true,
  messages: {
    ru,
  },
});
