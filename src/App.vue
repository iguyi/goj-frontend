<template>
  <div id="app">
    <BasicLayout />
  </div>
</template>

<style>
#app {
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout";
import { onMounted } from "vue";

/**
 * 全局初始化函数, 全局单次调用的代码可以写到这里
 */
const doInit = () => {
  console.log("欢迎使用 GOJ 项目");
};

onMounted(() => {
  doInit();
});
</script>
