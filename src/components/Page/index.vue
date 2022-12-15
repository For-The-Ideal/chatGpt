<template>
        <div class="pageFooter">
            <Page :total="100" show-sizer  show-elevator />
        </div>
</template>


<script setup lang="ts">
import {reactive,toRefs} from "vue"


const state = reactive({

})

// const {} = toRefs(state)

</script>


<style scoped lang="less">
@import "./index.less";
</style>