<template>
  <div class="layout">
    <Layout>
        <Sider ref="sideDom" hide-trigger collapsible :collapsed-width="80" v-model="isCollapsed">
          <div class="logoClass">
            <img :class="isCollapsed ? 'logoHide' : 'logoOpen'" :src="logoIcon" alt="">
          </div>
          <Menu :active-name="getMenuParams.openNames + '-' + getMenuParams.activeName" :open-names="[getMenuParams.openNames]" width="auto" theme="light" :class="menuitemClasses">
            <Submenu :name="index.toString()" v-for="(item,index) in menuList" :key="index">
                <template #title>
                    <Icon :type="item.icon" />
                    <span>{{item.title}}</span>
                </template>
                <div v-if="item.isShowSon && !item.isHideSon">
                  <div v-for="(items,key) in item.sonList" :key="key">
                    <MenuItem @click="clickSon(items,index,key)" :name="index.toString() + '-' + key.toString()">
                      <Icon :type="items.icon" />
                      {{items.title}} --- {{ index.toString() + '-' + key.toString() }}
                    </MenuItem>
                  </div>
                </div>
            </Submenu>
          </Menu>
        </Sider>
      <Layout>
          <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
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
          <Layout :style="{ padding: '0 15px 15px' }">
              <Breadcrumb :style="{ margin: '15px 0'}">
                <Header :style="{ padding: 0 }" class="layout-header-bar">
                    <Icon @click="collapsedSider" :class="rotateIcon" :style="{ margin: '0 15px' }" type="md-menu" size="24"></Icon>
                    <Tag @click="clickTagItem(value)" v-for="(value,key) in getTagList" :key="key" type="dot" closable :color="value.router === getRoute.path ? 'primary' : ''">{{value.title}}</Tag>
                </Header>
              </Breadcrumb>
              <Content :style="{ padding: '15px', minHeight: '280px', background: '#fff' }">
                <router-view />
              </Content>
          </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, computed, ref,watch  } from "vue";
import useCurrentInstance from "./../utils/useCurrentInstance"
import {Reactive,SonItem,MenuParams} from "../interfaces/layout/index"
import {tagListStore} from "../store/modules/tagList"
import {menuParamsStore} from "../store/modules/menuParams"

let sideDom = ref();
const {proxy} = useCurrentInstance()
const newTagListStore = tagListStore()
const newMenuParamsStore = menuParamsStore()
const state:Reactive = reactive({
  isCollapsed: false,
  tagList:[],
  menuList:[
  {
      title:"工作台",
      isShowSon:true,
      icon:"md-desktop",
      fatherId:1,
      isHideSon:false,
      sonList:[
        {
          title:"首页",
          icon:"ios-paper",
          sonId:1,
          router:"/home",
          openNames:"0",
          activeName:"0",
        },
      ]
    },
    {
      title:"图书管理",
      isShowSon:true,
      icon:"ios-keypad",
      fatherId:2,
      isHideSon:false,
      sonList:[
        {
          title:"文章管理",
          icon:"md-list-box",
          sonId:2,
          router:"/articleList",
          openNames:"1",
          activeName:"0",
        },
      ]
    },
     {
      title:"影片管理",
      isShowSon:true,
      icon:"md-phone-landscape",
      isHideSon:false,
      fatherId:3,
      sonList:[
        {
          title:"视频管理",
          icon:"md-list-box",
          sonId:3,
          router:"/videoList",
          openNames:"2",
          activeName:"0",
        },
      ]
    },
    {
      title:"作家管理",
      isShowSon:true,
      icon:"ios-create",
      isHideSon:false,
      fatherId:4,
      sonList:[]
    },
     {
      title:"用户管理",
      isShowSon:true,
      icon:"ios-person",
      isHideSon:false,
      fatherId:5,
      sonList:[]
    },
    {
      title:"系统管理",
      isShowSon:true,
      icon:"ios-settings",
      isHideSon:false,
      fatherId:6,
      sonList:[]
    },
     {
      title:"留言管理",
      isShowSon:true,
      icon:"ios-chatboxes",
      isHideSon:false,
      fatherId:7,
      sonList:[]
    },
    {
      title:"集采管理",
      isShowSon:true,
      icon:"ios-megaphone",
      isHideSon:false,
      fatherId:8,
      sonList:[]
    },
  ]
});

const collapsedSider = (): void => {
  sideDom.value.toggleCollapse();
};

 const getTagList = computed(() =>{
  return newTagListStore.getTagList
})

const rotateIcon = computed(() => {
  return ["menu-icon", state.isCollapsed ? "rotate-icon" : ""];
});

const getMenuParams = computed(():MenuParams => {
  console.log(newMenuParamsStore.getMenuParams,'newMenuParamsStore.getMenuParams');
  console.log(proxy,'xx');
  return proxy.$RegexUtils.isNullObject(newMenuParamsStore.getMenuParams) ? {openNames:"0",activeName:"0"} : newMenuParamsStore.getMenuParams
})
const logoIcon = computed(() => {
  return new URL(state.isCollapsed ? "../assets/hideLogo.png" : '../assets/openLogo.png',import.meta.url).href
});

const getRoute = computed(()=>{
  return proxy.$route
})

const menuitemClasses = computed((): string[] => {
  state.menuList = state.menuList.map((v)=>{
    v.isHideSon = state.isCollapsed
    return v
  })
  return ["menu-item", state.isCollapsed ? "collapsed-menu" : ""];
});

const clickSon = async (items:SonItem,index:Number,key:Number):Promise<void>=>{
  if(proxy.$route.path === items.router){
    return
  }
  let list = await getTagList.value
  let flag = list.find((v)=>{
    return v.sonId === items.sonId
  })
  if(!flag){
    newTagListStore.changeTagList(items)
  }
  proxy.$router.push({
    path:items.router
  })
}

const clickTagItem = (value:SonItem)=>{
  console.log(value,'vv');
  if(proxy.$route.path === value.router){
    return
  }
  proxy.$router.push({
    path:value.router
  })

}
const { isCollapsed,menuList} = toRefs(state);
</script>

<style scoped lang="less">
@import "./index.less";
</style>
