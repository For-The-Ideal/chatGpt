<template>
  <div class="silde_box">
    <slide-verify
      ref="block"
      :slider-text="text"
      :accuracy="accuracy"
      @again="onAgain"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh">
    </slide-verify>
    <div>{{ msg }}</div>
  </div>
</template>

<script setup lang="ts">
import SlideVerify, { SlideVerifyInstance } from "vue3-slide-verify";
import "vue3-slide-verify/dist/style.css";
import { reactive, ref ,toRefs} from "vue";

interface Reactive {
  msg: string;
  text: string;
  verifyState: Boolean;
  accuracy: Number;
}

const block = ref<SlideVerifyInstance>();
const state: Reactive = reactive({
  msg: "",
  text: "向右滑动~",
  verifyState: false,
  accuracy: 1,
});

const onAgain = () => {
  state.msg = "检测到非人为操作的哦！ try again";
  // 刷新
  block.value?.refresh();
};

const onSuccess = (times: number) => {
  state.msg = `login success, 耗时${(times / 1000).toFixed(1)}s`;
};

const onFail = () => {
  state.msg = "验证不通过";
};

const onRefresh = () => {
  state.msg = "点击了刷新小图标";
};

const { msg, text } = toRefs(state);;
</script>

<style scoped lang="less"></style>
