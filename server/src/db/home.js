import sliderMain from "./common/sliderMain.js";
import catalogCategories from "./common/catalogCategories.js";
import specifications from "./common/specifications.js";
import feedback from "./common/feedback.js";

const data = {
  meta: {
    title: "Главная",
  },
  sliderMain,
  catalogCategories,
  specifications,
  feedback,
};

export default {
  request: data,
  response: data,
};
