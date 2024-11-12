import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "./modules/home/pages/HomePage.vue";

const routes = [{ path: "/", component: HomeView, meta: { layout: "main" } }];

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
});
