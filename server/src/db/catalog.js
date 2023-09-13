import { products, categories } from "./common/products.js";
import specifications from "./common/specifications.js";
import feedback from "./common/feedback.js";

const catalogMenu = [
  { id: "all", title: "Все", url: "/catalog?category.name=all" },
];

categories.forEach((value, key) => {
  catalogMenu.push({
    id: key,
    title: value,
    url: `/catalog?category.name=${key}`,
  });
});

export default {
  request: products,
  response: (payload) => {
    const data = {
      meta: {
        title: "Каталог продукции",
      },
      breadcrumbs: [
        { id: 1, title: "Главная", url: "/" },
        { id: 2, title: "Каталог продукции", url: null },
      ],
      title: "Каталог продукции",
      catalogList: [],
      catalogMenu,
      specifications,
      feedback,
    };

    data.catalogList = payload;

    return data;
  },
};
