<template>
  <!-- {{ messge }}
  <br>
   <Space direction="vertical">
        <Space wrap>
            <Button @click="clickInfo" type="info">我是Header 点击传递信息给Footer组件</Button>
        </Space>
    </Space> -->
  <Result type="success" title="标题" extra="其他补充信息，自带灰底效果">
    <template #actions>
        <Space direction="vertical">
        <Space wrap>
            <Button @click="chose" type="info">关闭</Button>
        </Space>
    </Space>
    </template>
    </Result>

    
</template>

<script setup lang="ts">
import { getCurrentInstance, reactive, toRefs,ComponentPublicInstance } from "vue";
// const state = reactive({
//   messge: "我是头部",
// });
type Props = {
  title?:string,
  modelValue:false
}

const propsData = defineProps<Props>()
const emit = defineEmits(['newEmit','update:modelValue'])
// const that = getCurrentInstance()
// let { messge } = toRefs(state);

// const clickInfo = ():void =>{
//     that?.proxy?.$Bus.emit('clickHeader',propsData.title)
//     emit("newEmit",'emit的值' + propsData.title)
//     emit("update:title",'emit的值' + propsData.title)
// }

const chose = ():void =>{
  emit("update:modelValue",false)
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>
