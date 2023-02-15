<template>
  <div>
    <div id="home" ref="home"></div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, toRefs } from "@vue/reactivity"
import { onMounted } from "@vue/runtime-core"
import * as echarts from "echarts"
const home = ref()
const state = reactive({

})

onMounted(()=>{
  initEcharts()
})

let initEcharts = ():void=>{
let myChart: echarts.ECharts = echarts.init(home.value);
let option = {
  series: [
    {
      type: 'pie',
      data: [
        {
          value: 335,
          name: '玄幻'
        },
        {
          value: 234,
          name: '爽文'
        },
        {
          value: 158,
          name: '都市'
        },
        {
          value: 194,
          name: '爱情'
        },
        {
          value: 184,
          name: '科幻'
        },
        {
          value: 295,
          name: '福尔摩斯'
        }
      ]
    }
  ]
}
myChart.setOption(option);
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>