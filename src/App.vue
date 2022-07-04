<!--
 * @Author: 七画一只妖
 * @Date: 2022-03-07 22:38:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 11:18:28
 * @Description: file content
-->
<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
// import HomePage from "@/components/Homepage/Homepage";

export default {
  name: "App",
  components: {
  },
};
</script>

<style>
</style>
