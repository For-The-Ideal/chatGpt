<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>
              Item 1
            </MenuItem>
            <MenuItem name="2">
              <Icon type="ios-keypad"></Icon>
              Item 2
            </MenuItem>
            <MenuItem name="3">
              <Icon type="ios-analytics"></Icon>
              Item 3
            </MenuItem>
            <MenuItem name="4">
              <Icon type="ios-paper"></Icon>
              Item 4
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider ref="sideDom" hide-trigger collapsible :collapsed-width="80" v-model="isCollapsed">
          <Menu :active-name="openNames + '-' + activeName" :open-names="[openNames]" width="auto" theme="light" :class="menuitemClasses">
            <Submenu :name="index.toString()" v-for="(item,index) in menuList" :key="index">
            <template #title>
                <Icon :type="item.icon" />
                <span>{{item.title}}</span>
            </template>
                <div v-if="item.isShowSon">
                  <div v-for="(items,key) in item.sonList" :key="key">
                    <MenuItem @click="clickSon(items)" :name="index.toString() + '-' + key.toString()">
                      <Icon :type="items.icon" />
                      {{items.title}}
                    </MenuItem>
                  </div>
                </div>
        </Submenu>
    </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <Header :style="{ padding: 0 }" class="layout-header-bar">
              <Icon @click="collapsedSider" :class="rotateIcon" :style="{ margin: '0 20px' }" type="md-menu" size="24"></Icon>
              <Tag type="dot" closable color="primary">Home</Tag>
              <!-- <Tag type="dot" closable color="success">Components</Tag> -->
              <!-- <Tag type="dot" closable color="error">Layout</Tag> -->
            </Header>
          </Breadcrumb>
          <Content :style="{ padding: '24px', minHeight: '280px', background: '#fff' }">
            <router-view />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, computed, ref  } from "vue";
import useCurrentInstance from "./../utils/useCurrentInstance"
import {Reactive,SonItem} from "../interfaces/layout/index"
let sideDom = ref();
const {proxy} = useCurrentInstance()
const state:Reactive = reactive({
  isCollapsed: false,
  openNames:"0",
  activeName:"0",
  menuList:[
  {
      title:"工作台",
      isShowSon:true,
      icon:"md-desktop",
      sonList:[
        {
          title:"首页",
          icon:"ios-paper",
          router:"/home",
        },
      ]
    },
    {
      title:"内容管理",
      isShowSon:true,
      icon:"ios-keypad",
      sonList:[
        {
          title:"文章管理",
          icon:"md-list-box",
          router:"/articleList",
        },
      ]
    },
    {
      title:"系统管理",
      isShowSon:true,
      icon:"ios-settings",
      sonList:[
        {
          title:"用户管理",
          icon:"ios-person",
          router:"",
        },
      ]
    },
    // {
    //   title:"HTML",
    //   isShowSon:true,
    //   icon:"logo-html5",
    //   sonList:[
    //     {
    //       title:"盒模型",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"弹性布局",
    //       icon:"",
    //       router:"",
    //     },
    //   ]
    // },
    // {
    //   title:"JavaScript",
    //   isShowSon:true,
    //   icon:"logo-javascript",
    //   sonList:[
    //   {
    //       title:"Es6",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"Promise",
    //       icon:"",
    //       router:"",
    //     },
    //   ]
    // },
    // {
    //   title:"CSS",
    //   isShowSon:true,
    //   icon:"logo-css3",
    //   sonList:[
    //   {
    //       title:"过渡属性",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"弹性布局",
    //       icon:"",
    //       router:"",
    //     }
    //   ]
    // },
    // {
    //   title:"JavaScript",
    //   isShowSon:true,
    //   sonList:[
    //   {
    //       title:"第一章",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"弹性布局",
    //       icon:"",
    //       router:"",
    //     }
    //   ]
    // },
    // {
    //   title:"TypeScript",
    //   isShowSon:true,
    //   sonList:[
    //   {
    //       title:"第一章",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"弹性布局",
    //       icon:"",
    //       router:"",
    //     }
    //   ]
    // },
    // {
    //   title:"Golang",
    //   isShowSon:true,
    //   sonList:[
    //   {
    //       title:"第一章",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"弹性布局",
    //       icon:"",
    //       router:"",
    //     }
    //   ]
    // },
    // {
    //   title:"Mysql",
    //   isShowSon:true,
    //   sonList:[
    //   {
    //       title:"第一章",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"弹性布局",
    //       icon:"",
    //       router:"",
    //     }
    //   ]
    // },
    // {
    //   title:"Docker",
    //   isShowSon:true,
    //   sonList:[
    //   {
    //       title:"第一章",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"弹性布局",
    //       icon:"",
    //       router:"",
    //     }
    //   ]
    // },
    // {
    //   title:"Dart",
    //   isShowSon:true,
    //   sonList:[
    //   {
    //       title:"第一章",
    //       icon:"",
    //       router:"",
    //     },
    //     {
    //       title:"弹性布局",
    //       icon:"",
    //       router:"",
    //     }
    //   ]
    // },
    // {
    //   title:"Filtter",
    //   isShowSon:true,
    //   sonList:[]
    // }
  ]
});

const collapsedSider = (): void => {
  sideDom.value.toggleCollapse();
};

const rotateIcon = computed(() => {
  return ["menu-icon", state.isCollapsed ? "rotate-icon" : ""];
});

const menuitemClasses = computed((): string[] => {
  return ["menu-item", state.isCollapsed ? "collapsed-menu" : ""];
});

const clickSon = (items:SonItem):void=>{
  console.log(items);
  proxy.$router.push({
    path:items.router
  })
}

const { isCollapsed,menuList,openNames,activeName } = toRefs(state);
</script>

<style scoped lang="less">
@import "./index.less";
</style>
