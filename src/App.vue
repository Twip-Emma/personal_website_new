<!--
 * @Author: 七画一只妖
 * @Date: 2022-03-07 22:38:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-26 20:07:07
 * @Description: file content
-->
<template>
  <!-- <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer" class="el-footer"></router-view>
  </div> -->
    <div class="app">
    <el-container>
      <el-header>
        <router-view name="header"></router-view>
      </el-header>
      <!-- 这里应该动态展示 -->
      <!-- <HomePage/> -->
      <router-view></router-view>
      <router-view name="other"  class="app2"></router-view>
      <el-footer class="el-footer">
        <router-view name="footer" class="el-footer"></router-view>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
// import HomePage from "@/components/Homepage/Homepage";

export default {
  name: "App",
  components: {
  },
  // mounted(){
  //   window.onbeforeunload()
  // },
  // destroy(){
  //   localStorage.clear()
  // }
};
</script>

<style>

.app {
  width: 100%;
  left: 0;
  right: 0;
  position: absolute;
  margin: auto;
  /* 背景 */
  background-image: url("http://cdngoapl.twip.top/%E7%A5%9E%E9%B9%BF%E7%A5%88%E7%A6%8F%E5%AE%BD%E5%B1%8F.png");
  /* background-color: rgba(255, 255, 0, 0.5); */
  background-attachment: fixed;
}

.app2{
  width: 80%;
  margin: auto;
  
}

.el-header {
  background-color: #ccffcc;
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
