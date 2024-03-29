import type { RouteRecordRaw } from "vue-router";
import Layout from "../layout/index.vue";
/**
 * {
 *  path: string,          页面访问的路径
    name:string,           页面唯一值，防止页面重复
    component: string,     页面访问当前项目的文件夹目录
    redirect:string        重定向页面路径
    meta: {
      title:string;        页面标题，通常必选。
      icon?:string;        图标，一般配合菜单使用。
      auth?:boolean;       是否需要登录权限。
      ignoreAuth?:boolean; 是否忽略权限。
      roles?:RoleEnum[];   可以访问的角色
      keepAlive?:boolean;  是否开启页面缓存
      hideMenu?:boolean;   有些路由我们并不想在菜单中显示，比如某些编辑页面。
      order?:number;       菜单排序。
      frameUrl?:string;    嵌套外链
    },
    children:Array      嵌套子类配置
 * }
 */
const routerMap: RouteRecordRaw[] = [
  {
    path: "/error",
    name: "error",
    component: () => import("../pages/error/index.vue"),
    meta: {
      title: "404",
      hideMenu: false,
      auth: false,
      icon: "",
    },
  },
  {
    path: "/",
    name: "Login",
    component: () => import("../pages/login/index.vue"),
    meta: {
      title: "登录",
      hideMenu: false,
      auth: false,
      icon: "",
    },
  },
  {
    path: "/chat",
    name: "Chat",
    component: Layout,
    children: [
      {
        path: "/chat",
        name: "Chat",
        component: () => import("../pages/chat/index.vue"),
        meta: {
          title: "chatGpt",
          hideMenu: false,
          auth: true,
          icon: "",
        },
      },
    ],
  }
];

export default routerMap;
