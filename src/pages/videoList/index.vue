<template>
    <div>
        111
    </div>
</template>

<script lang="ts">
import { toRefs, reactive } from "vue";
export default {
  setup() {
    const state = reactive({});

    return {
      ...toRefs(state),
    };
  },
};
</script>

<style scoped lang="less">
@import "./index.less";
</style>
