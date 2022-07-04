<template>
<div>
  
    
    <div v-Draggable>
      <div class="title">拖拽 自定义指令 {{title}}</div>
        <div class="box">
    
        </div>
    </div>


      <Space direction="vertical">
        <Space wrap>
            <Button @click="clickInfo" type="info">点击</Button>
        </Space>
    </Space>
    
    <!-- <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <Footer ref="footer"></Footer> -->
     <!-- <Space direction="vertical">
        <Space wrap>
            <Button @click="clickInfo" type="info">Info</Button>
        </Space>
    </Space>
    {{params}} -->
  </div>
</template>

<script setup lang="ts">
import {Reactive} from "../../interfaces/login/index"
import { getCurrentInstance, ComponentPublicInstance,customRef,Ref,ref,reactive,toRefs } from 'vue';
import Header from "../../components/Header/index.vue"
import Footer from "../../components/Footer/index.vue"
import {vDraggable} from "../../directives/draggable"
const instance = getCurrentInstance()

const state = reactive({
  params: {
    userName: "",
    passWord:"",
  },
});
const title = ref<string>('德莱文')
const {  params } = toRefs(state);
const clickInfo = ():void=>{
 
}
const onChangeSon = (ev:Number):void=>{
  console.log(ev,'ev2222222222222222')

}

const newEmit = (ev:string):void =>{
  console.log(ev,'ev')
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>