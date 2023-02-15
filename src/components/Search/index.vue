<template>
  <div>
    <Select v-model="model" style="width: 200px">
      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{item.label}}</Option>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from "vue";
const state = reactive({
  cityList: [
    {
      value: "New York",
      label: "New York",
    },
    {
      value: "London",
      label: "London",
    },
    {
      value: "Sydney",
      label: "Sydney",
    },
    {
      value: "Ottawa",
      label: "Ottawa",
    },
    {
      value: "Paris",
      label: "Paris",
    },
    {
      value: "Canberra",
      label: "Canberra",
    },
  ],
  model: "",
});

const { cityList, model } = toRefs(state);
</script>

<style scoped lang="less">
@import "./index.less";
</style>
