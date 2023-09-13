import { categories } from "./products.js";

const data = [];
let index = 1;

categories.forEach((value, key) => {
  const imageIndex = index <= 9 ? `0${index}` : index;

  data.push({
    id: index,
    title: value,
    url: `/catalog?category.name=${key}`,
    image: {
      any: [
        `/images/catalog/${imageIndex}.png`,
        `/images/catalog/${imageIndex}@2x.png`,
      ],
      webp: [
        `/images/catalog/${imageIndex}.webp`,
        `/images/catalog/${imageIndex}@2x.webp`,
      ],
    },
  });

  index++;
});

export default data;
