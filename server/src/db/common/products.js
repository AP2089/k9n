import randomNumber from "random-number";

export const categories = new Map();

categories.set("bearings", "Подшибники");
categories.set("drive-belts", "Ремни приводные");
categories.set("filters", "Фильтры");
categories.set("hand-tools", "Ручной инструмент");
categories.set("hardware-products", "Метизная продукция");
categories.set("electrical-equipment", "Электрооборудование");
categories.set("technical-fluids", "Технические жидкости");
categories.set("paronite", "Паронит");

function getProducts() {
  const data = [];
  let index = 1;

  categories.forEach((value, key) => {
    for (let i = 1; i < 10; i++) {
      const id = index;

      const price = randomNumber({
        min: 1000,
        max: 50000,
        integer: true,
      });

      const article = `KUK-${randomNumber({
        min: 1000000,
        max: 9999999,
        integer: true,
      })}`;

      data.push({
        id,
        price,
        article,
        url: `/products/${id}`,
        title: `Выключатель автоматический ${id}`,
        category: {
          name: key,
          url: `/catalog?category.name=${key}`,
          title: value,
        },
      });

      index++;
    }
  });

  return data;
}

export const products = getProducts();

export default {
  request: products,
  response: products,
};
