import { products } from "./common/products.js";
import feedback from "./common/feedback.js";

const data = {
  meta: {
    title: "Специальная смазка для шпинделей",
  },
  breadcrumbs: [
    { id: 1, title: "Главная", url: "/" },
    { id: 2, title: "Каталог продукции", url: "/catalog" },
    { id: 3, title: "Специальная смазка для шпинделей", url: null },
  ],
  id: 1,
  title: "Специальная смазка для шпинделей",
  description:
    "<p>Выключатели с расцепителями тока перегрузки с регулировкой номинального тока и температурной компенсацией – для защиты от перегрузок и коротких замыканий, пуска и остановки электродвигателей;</p><p>Основное назначение выключателей серии АЕ20 – защита кабелей и проводов, а также асинхронных электродвигателей.</p><p>Регулировка теплового расцепителя. Монтаж вертикально или поворот вправо/влево на 90°. Подвод питания сверху и снизу. Температура эксплуатации от-60°С до +40°С. Применение в контактной системе экструдированных серебрографитовых контактов. Возможность подключения проводников без кабельных наконечников.</p>",
  article: "KUK- 9861567",
  price: "20200",
  category: "Электрооборудование",
  image: {
    any: ["/images/product/01.jpg", "/images/product/01@2x.jpg"],
    webp: ["/images/product/01.webp", "/images/product/01@2x.webp"],
  },
  specifications: [
    { id: 1, title: "Артикул", value: "KUK-699975" },
    { id: 2, title: "Производитель", value: "КЭАЗ" },
    { id: 3, title: "Страна", value: "Россия" },
    {
      id: 4,
      title: "Наименование",
      value: "Выключатель автоматический АЕ2043-100-63А",
    },
    { id: 5, title: "Упаковки", value: "4 шт, 320 шт" },
    { id: 6, title: "Сертификат", value: "RU C-RU АЖ26.В05105" },
    { id: 7, title: "Кол-во силовых полюсов", value: 3 },
    { id: 8, title: "Номин. напряжение, В", value: 380 },
  ],
  feedback,
};

export default {
  request: products,
  response: (product) => {
    data.meta.title = product.title;
    data.breadcrumbs.at(-1).title = product.title;

    return {
      ...data,
      ...product,
    };
  },
};
