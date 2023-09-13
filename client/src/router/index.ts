import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const Contacts = () => import("@/pages/Contacts.vue");
const Catalog = () => import("@/pages/Catalog.vue");
const Product = () => import("@/pages/Product.vue");
const Search = () => import("@/pages/Search.vue");
const NotFound = () => import("@/pages/NotFound.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog,
  },
  {
    path: "/products/:id",
    name: "product",
    component: Product,
  },
  {
    path: "/search",
    name: "search",
    component: Search,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
    };
  },
  routes,
});

export default router;

export * from "vue-router";
