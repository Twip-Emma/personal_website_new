<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 10:27:10
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 10:01:56
 * @Description: file content
-->
<template>
  <div class="app">
    <el-container>
      <el-header><NavBar /></el-header>
      <!-- 这里应该动态展示 -->
      <!-- <HomePage/> -->
      <router-view class="app2"></router-view>
      <el-footer class="el-footer"><Footer /></el-footer>
    </el-container>
  </div>
</template>

<script>
// import HomePage from "@/views/HomePage";
import NavBar from "@/components/changeless/NavBar";
import Footer from "@/components/changeless/Footer";
export default {
  name: "BlogMain",
  components: {
    NavBar,
    Footer,
  },
};
</script>

<style>
.app {
  width: 100%;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
}

.app2{
  width: 80%;
  margin: auto;
}

.el-header {
  background-color: #545c64;
}
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  line-height: 60px;
  box-sizing: border-box;
  flex-shrink: 0;
  padding: 0%;
}

.el-aside {
  /* background-color: #d3dce6; */
  color: #333;
  text-align: center;
  line-height: 100px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
