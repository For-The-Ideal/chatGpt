import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routerMap";

const router = createRouter({
  history: createWebHashHistory(), //
  routes,
});

export default router
