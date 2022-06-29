import type { RouteRecordRaw } from 'vue-router';
import Layout from "../layout/index.vue"
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
const routerMap:RouteRecordRaw[] = [
    {
        path: '/error',
        name: 'error',
        component: () => import('../website/error/index.vue'),
        meta: {
            title: '404',
        },
      },
    {
        path: '/',
        name: 'Login',
        component: () => import('../website/login/index.vue'),
        meta: {
            title: '登录',
        },
      },
    {
        path: '/home',
        name: 'Home',
        component: Layout,
        children: [
          {
            path: '/home',
            name: 'Home',
            component:() => import('../website/home/index.vue') ,
            meta: { 
              title: '首页',
              auth:true,
              icon:"",
            },
          },
        ]
      },
      {
        path: '/journal',
        name: 'journal',
        component: () => import('../website/journal/index.vue'),
        meta: { 
          title: '首页',
          auth:true,
          icon:"",
        },
        // children: [
        //   {
        //     path: '/journal/others',
        //     name: 'others',
        //     component: "",
        //     meta: {
        //       title: '其他菜单',
        //       icon: 'xitongrizhi',
        //       auth: ['others'],
        //     },
        //   },
        // ]
      }

]

export default routerMap