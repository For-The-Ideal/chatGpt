<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">
            <img src="https://img.alicdn.com/tfs/TB1R5fsgyDsXe8jSZR0XXXK6FXa-281-80.jpg" alt="">
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
          <Menu active-name="1-2" :open-names="['1']" width="auto" theme="light" :class="menuitemClasses">
        <Submenu name="1">
            <template #title>
                <Icon type="ios-analytics" />
                <span >Navigation One</span>
            </template>
                <div v-if="!isCollapsed">
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                </div>
        </Submenu>
        <!-- <Submenu name="2">
            <template #title>
                <Icon type="ios-filing" />
                <span v-if="!isCollapsed">Navigation Two</span>
            </template>
            <div v-if="!isCollapsed">
                <MenuItem name="2-1">Option 5</MenuItem>
                <MenuItem name="2-2">Option 6</MenuItem>
            </div>
            <Submenu name="3">
                <template #title>Submenu</template>
                <MenuItem name="3-1">Option 7</MenuItem>
                <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
        </Submenu>
        <Submenu name="4">
            <template #title>
                <Icon type="ios-cog" />
                <span v-if="!isCollapsed">Navigation Three</span>
            </template>
            <div v-if="!isCollapsed">
                <MenuItem name="4-1">Option 9</MenuItem>
                <MenuItem name="4-2">Option 10</MenuItem>
                <MenuItem name="4-3">Option 11</MenuItem>
                <MenuItem name="4-4">Option 12</MenuItem>
            </div>
        </Submenu> -->
    </Menu>
        </Sider>
        <Layout :style="{ padding: '0 24px 24px' }">
          <Breadcrumb :style="{ margin: '24px 0' }">
            <Header :style="{ padding: 0 }" class="layout-header-bar">
              <Icon @click="collapsedSider" :class="rotateIcon" :style="{ margin: '0 20px' }" type="md-menu" size="24"></Icon>
              <Tag type="dot" closable color="primary">Home</Tag>
              <Tag type="dot" closable color="success">Components</Tag>
              <Tag type="dot" closable color="error">Layout</Tag>
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
import { reactive, toRefs, computed, ref, Ref } from "vue";
import {Reactive} from "../interfaces/layout/index"
let sideDom: Ref = ref(null);
const state:Reactive = reactive({
  isCollapsed: false,
  menuList:[
    {

    }
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

const { isCollapsed } = toRefs(state);
</script>

<style scoped lang="less">
@import "./index.less";
</style>
