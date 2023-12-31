import { createApp } from "vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import App from "@/App.vue";
import router from "@/router";
import i18n from "@/translations";
import "@/styles/main";
import "vue-toastification/dist/index.css";

const app = createApp(App);
const pinia = createPinia();

app.use(i18n);
app.use(router);
app.use(pinia);
app.use(Toast);

app.mount("#app");
