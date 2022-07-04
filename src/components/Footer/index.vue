<template>
 {{messge}}
 <br>
 {{getParams}}
   <Space direction="vertical">
        <Space wrap>
            <Button  type="info">我是Footer  接收传递信息的组件</Button>
        </Space>
    </Space>
</template>

<script setup lang="ts">
import { getCurrentInstance, reactive, toRefs } from 'vue'
const state = reactive({
  messge:"我是底部",
  getParams:"",
})
let that = getCurrentInstance()
let {messge}  = toRefs(state)

that?.proxy?.$Bus.on("clickHeader",(ev):void=>{
console.log(ev,'ev222')
    state.getParams = ev as string
})
let {getParams} = toRefs(state)
</script>

<style scoped lang="less">
@import "./index.less";
</style>
