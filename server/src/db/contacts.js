import feedback from "./common/feedback.js";

const data = {
  meta: {
    title: "Контакты",
  },
  ...feedback,
  breadcrumbs: [
    { id: 1, title: "Главная", url: "/" },
    { id: 2, title: "Контакты", url: null },
  ],
  title: "Контакты",
  lat: 55.532966,
  lng: 38.928583,
};

export default {
  request: data,
  response: data,
};
