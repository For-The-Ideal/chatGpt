<template>
<div>
    <div v-Draggable>
      <div class="title">拖拽 自定义指令 {{title}}</div>
        <div class="box">
            <img :src="state.list[state.imgPath]" alt="">
        </div>
    </div>

      <Space direction="vertical">
        <Space wrap>
            <Button @click="clickInfo" type="info">点击</Button>
        </Space>
    </Space>

{{LoginParamsStore.loginParams.token}}

{{LoginParamsStore}}
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
import { getCurrentInstance, ComponentPublicInstance,customRef,Ref,ref,reactive,toRefs, onMounted } from 'vue';
import Header from "../../components/Header/index.vue"
import Footer from "../../components/Footer/index.vue"
import {vDraggable} from "../../directives/draggable"
import {loginParamsStore} from "../../store/modules/loginParams"
const instance = getCurrentInstance()

const state = reactive({
  list:["https://cdn.glddcrm.com/static/image/banner/banner2.png","https://cdn.glddcrm.com/static/image/banner/banner3.png"],
  imgPath:0,
  params: {
    userName: "",
    passWord:"",
  },
});
const title = ref<string>('德莱文222')

const {  params,list,imgPath } = toRefs(state);

const LoginParamsStore = loginParamsStore()

onMounted(()=>{

})







  
 const clickInfo = ():void=>{
  LoginParamsStore.changeLoginParams({loginTime:1,token:"5"}).then(()=>{
     console.log(LoginParamsStore.getLoginParams,'LoginParamsStore')
  })

 
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