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
      title: "Name",
      key: "name",
      tree: true,
    },
    {
      title: "Age",
      key: "age",
      tree: false,
    },
    {
      title: "Address",
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
