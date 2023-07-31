<template>
  <div class="layout">
    <Layout>
      <Sider ref="sideDom" hide-trigger collapsible :collapsed-width="80" v-model="isCollapsed">
        <div class="logoClass">
          <img :class="isCollapsed ? 'logoHide' : 'logoOpen'" :src="logoIcon" alt="">
        </div>
        <Menu ref="menuDom" :active-name="getMenuParams.openNames + '-' + getMenuParams.activeName"
          :open-names="[getMenuParams.openNames]" width="auto" theme="light" :class="menuitemClasses">
          <Submenu :name="index.toString()" v-for="(item, index) in getMenuList" :key="index">
            <template #title>
              <Icon :type="item.icon" />
              <span>{{ item.title }}</span>
            </template>
            <div v-if="item.isShowSon && !item.isHideSon">
              <div v-for="(items, key) in item.sonList" :key="key">
                <MenuItem @click="clickSon(items, index, key)" :name="index.toString() + '-' + key.toString()">
                <Icon :type="items.icon" />
                {{ items.title}}
                </MenuItem>
              </div>
            </div>
          </Submenu>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark" active-name="1">
            <!-- <div class="layout-nav">
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
            </div> -->
          </Menu>
        </Header>
        <Layout :style="{ padding: '0 15px 15px' }">
          <Breadcrumb :style="{ margin: '15px 0' }">
            <Header :style="{ padding: 0 }" class="layout-header-bar">
              <Icon @click="collapsedSider" :class="rotateIcon" :style="{ margin: '0 15px' }" type="md-menu" size="24">
              </Icon>
              <Poptip v-model="visible" confirm @on-ok="confimDelTag" @on-cancel="cancelTag">
                <Tag @click="clickTagItem(value)" @on-close="closeTagItem(value)" v-for="(value, key) in getTagList"
                  :key="key" type="dot" :closable="value.router === '/home' ? false : true"
                  :color="value.router === getRoute.path ? 'primary' : ''">
                  {{ value.title }}
                </Tag>
                <template #title>
                  <div>
                    确定要关闭这一页吗
                  </div>
                </template>
              </Poptip>
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
import { reactive, toRefs, computed, ref, watch, nextTick,onMounted } from "vue";
import useCurrentInstance from "./../utils/useCurrentInstance"
import { Reactive, SonItem, MenuParams} from "../interfaces/layout/index"
import { tagListStore } from "../store/modules/tagList"
import { menuParamsStore } from "../store/modules/menuParams"
import { initConfig } from "../initConfig"

let sideDom = ref();
let menuDom = ref()
const { proxy } = useCurrentInstance()
const newTagListStore = tagListStore()
const newMenuParamsStore = menuParamsStore()
const state: Reactive = reactive({
  isCollapsed: false,
  visible: false,
});

onMounted(()=>{
  // getMenuList()
})

const collapsedSider = (): void => {
  sideDom.value.toggleCollapse();
};

const getTagList = computed(() => {
  return newTagListStore.getTagList
})

const rotateIcon = computed(() => {
  nextTick(() => {
      menuDom.value.updateOpened()
      menuDom.value.updateActiveName()
    })
  return ["menu-icon", state.isCollapsed ? "rotate-icon" : ""];
});

const getMenuParams = computed((): MenuParams => {
  return newMenuParamsStore.getMenuParams
})

const logoIcon = computed(() => {
  return new URL(state.isCollapsed ? "../assets/hideLogo.png" : '../assets/openLogo.png', import.meta.url).href
});

const getRoute = computed(() => {
  return proxy.$route
})

const menuitemClasses = computed((): string[] => {
  return ["menu-item", state.isCollapsed ? "collapsed-menu" : ""];
});

const getMenuList = computed(() =>{
  let menuList:any = window.localStorage.getItem("menuList")
  return JSON.parse(menuList).map((v:any)=>{
    v.isHideSon = state.isCollapsed
    return v
  })
})

const clickSon = async (items: SonItem, index: Number, key: Number): Promise<void> => {
  if (proxy.$route.path === items.router) {
    return
  }
  let list = await getTagList.value
  let flag = list.find((v) => {
    return v.router === items.router
  })
  if (!flag) {
    newTagListStore.changeTagList(items)
  }
  newMenuParamsStore.changeMenuParams({ openNames: index.toString(), activeName: key.toString() })
  proxy.$router.push({
    path: items.router
  })
}

const clickTagItem = (value: SonItem) => {
  if (proxy.$route.path === value.router) {
    return
  }
  new Promise<void>((resolve) => {
    newMenuParamsStore.changeMenuParams({ openNames: value.openNames, activeName: value.activeName })
    proxy.$router.push({
      path: value.router
    })
    resolve()
  }).then(() => {
    nextTick(() => {
      menuDom.value.updateOpened()
      menuDom.value.updateActiveName()
    })
  })
}

const closeTagItem = (value: SonItem) => {
  let tagList = getTagList.value
  if (tagList.length <= 2 && tagList[0].router == initConfig.tagInit.router) {
    state.visible = true
    return
  }
  newTagListStore.removeTagList(value).then((res) => {
    clickTagItem(res)
  })
}

const confimDelTag = () => {
  let tagList = getTagList.value
  let tagItem = tagList.find((v: SonItem) => {
    return v.router == proxy.$route.path
  })
  newTagListStore.removeTagList(tagItem).then((res) => {
    clickTagItem(res)
  })
}

const cancelTag = () => {
  state.visible = false
}

const { isCollapsed, visible } = toRefs(state);
</script>

<style scoped lang="less">
@import "./index.less";
</style>
