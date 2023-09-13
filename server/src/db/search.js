import feedback from "./common/feedback.js";
import { products } from "./common/products.js";

const data = {
  meta: {
    title: "Поиск",
  },
  feedback,
  items: [],
  breadcrumbs: [
    { id: 1, title: "Главная", url: "/" },
    { id: 2, title: "Поиск", url: null },
  ],
  title: "Поиск",
};

export default {
  request: products,
  response: (payload) => {
    data.items = payload;

    return data;
  },
};
