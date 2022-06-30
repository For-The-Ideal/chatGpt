import { createRouter, createWebHashHistory,createWebHistory } from "vue-router";
import routes from "./routerMap";
/**
 * createWebHistory      不会在后面带斜杠
 * createWebHashHistory  会在后面带斜杠
 * createWebHistory
 * createWebHashHistory   通过window.history.state来管理历史记录，
 * 而createMemoryHistory   是通过维护一个队列和一个位置来实现对路由记录的管理，这也保证了在SSR中vue-router能够正常进行
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router
