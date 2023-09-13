import meta from "./meta.js";
import home from "./home.js";
import contacts from "./contacts.js";
import catalog from "./catalog.js";
import products from "./common/products.js";
import product from "./product.js";
import feedback from "./feedback.js";
import order from "./order.js";
import search from "./search.js";

const data = {
  meta,
  home,
  contacts,
  catalog,
  feedback,
  products,
  product,
  order,
  search,
};

const request = {};
const response = {};

for (const key in data) {
  request[key] = data[key].request;
  response[key] = data[key].response;
}

export default {
  request,
  response,
};
