<template>
  <div>
    <Table
      row-key="id"
      :load-data="handleLoadData"
      :columns="columns"
      :data="data"
      border
    ></Table>
    <Page />
  </div>
</template>
<script lang="ts" setup>
import Page from "../../../components/Page/index.vue";
import { reactive, toRefs } from "vue";
interface columnsItem {
  title: string;
  key: string;
  tree?: boolean;
}
interface childrenItem {
  id: string;
  name: string;
  age: number;
  address: string;
}
interface dataItem {
  id: string;
  name: string;
  age: number;
  address: string;
  _loading?: boolean;
  children: Array<childrenItem>;
}

interface Reactive {
  columns: Array<columnsItem>;
  data: Array<dataItem>;
}
const state: Reactive = reactive({
  columns: [
  {
      title: "业务系统",
      key: "name",
      tree: true,
    },
    {
      title: "部门",
      key: "age",
      tree: false,
    },
    {
      title: "科室",
      key: "address",
      tree: false,
    },
    {
      title: "业务负责人",
      key: "address",
      tree: false,
    },
    {
      title: "负责人电话",
      key: "address",
      tree: false,
    },
    {
      title: "云主机总数",
      key: "address",
      tree: false,
    },
    {
      title: "开机数量",
      key: "address",
      tree: false,
    },
    {
      title: "创建日期",
      key: "address",
      tree: false,
    },
    {
      title: "关机数量",
      key: "address",
      tree: false,
    },
    {
      title: "回收数量",
      key: "address",
      tree: false,
    },
    {
      title: "回收日期",
      key: "address",
      tree: false,
    },
    {
      title: "备注",
      key: "address",
      tree: false,
    },
  ],
  data: [
    {
      id: "100",
      name: "John Brown",
      age: 18,
      address: "New York No. 1 Lake Park",
      _loading: false,
      children: [
        {
          id: "100",
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
        },
      ],
    },
    {
      id: "101",
      name: "Jim Green",
      age: 24,
      address: "London No. 1 Lake Park",
      _loading: false,
      children: [],
    },
    {
      id: "102",
      name: "Joe Black",
      age: 30,
      address: "Sydney No. 1 Lake Park",
      _loading: false,
      children: [],
    },
    {
      id: "103",
      name: "Jon Snow",
      age: 26,
      address: "Ottawa No. 2 Lake Park",
      _loading: false,
      children: [],
    },
  ],
});

const handleLoadData = (): void => {};
const { columns, data } = toRefs(state);
</script>

<style scoped lang="less">
@import "./index.less";
</style>
