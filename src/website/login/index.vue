<template>
  <div>
    {{ params }}
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "@vue/reactivity";
import {Reactive} from "../../interfaces/login/index"

const state:Reactive = reactive({
  params: {
    userName: "",
    passWord:"",
  },
});

const {  params } = toRefs(state);
</script>

<style scoped lang="less">
@import "./index.less";
</style>