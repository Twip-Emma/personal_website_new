<!--
 * @Author: 七画一只妖
 * @Date: 2022-03-07 22:38:43
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-12 15:49:59
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
  background-image: url("http://cdngoapl.twip.top/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/%E5%8D%9A%E5%AE%A2%E8%83%8C%E6%99%AF%E5%9B%BE.png");
  /* background-color: rgba(255, 255, 0, 0.5); */
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

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
