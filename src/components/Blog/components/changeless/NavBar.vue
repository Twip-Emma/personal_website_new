<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 12:11:04
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2024-01-13 15:18:06
 * @Description: file content
-->
<template>
  <div class="out">
    <!-- 顶部导航栏 -->
    <el-menu
      class="el-menu-demo-p"
      mode="horizontal"
      background-color="#ffffff"
      @select="handleSelect"
      text-color="#333333"
      active-text-color="#669900"
    >
      <el-menu-item
        class="el-menu-item_p"
        index="1"
        @click="pageSwitch('HomePage')"
        >首页</el-menu-item
      >
      <el-menu-item
        class="el-menu-item_p"
        index="2"
        @click="pageSwitch('BlogEdit')"
        >写博客</el-menu-item
      >
      <el-menu-item
        class="el-menu-item_p"
        index="3"
        @click="pageSwitch('Message')"
        >留言</el-menu-item
      >
      <el-menu-item
        class="el-menu-item_p"
        index="4"
        @click="pageSwitch('Management')"
        >管理</el-menu-item
      >
      <el-menu-item
        class="el-menu-item_p"
        index="5"
        @click="pageSwitch('Meme')"
        >素材</el-menu-item
      >
      <el-menu-item
        class="el-menu-item_p"
        index="6"
        @click="pageSwitch('Market')"
        >动态</el-menu-item
      >
      <el-menu-item class="el-menu-item_p-input">
        <el-input
          :placeholder="lastInput"
          prefix-icon="el-icon-search"
          v-model="userInput"
        >
        </el-input>
      </el-menu-item>
      <Logined />
    </el-menu>
  </div>
</template>

<script>
import Logined from "@/components/Blog/components/changeless/Logined";
import blogApis from "@/apis/blogInfo";
export default {
  name: "NavBar",
  components: { Logined },
  data() {
    return {
      administrator: true,
      activeIndex: "1",
      activeIndex2: "1",
      userInput: "",
    };
  },
  computed: {
    lastInput() {
      return localStorage.getItem("searchName")
        ? localStorage.getItem("searchName")
        : "请输入内容";
    },
  },
  methods: {
    // 跳转页面
    pageSwitch(target) {
      this.$router.push({
        name: target,
        query: {},
      });
    },
    // 回车进行搜索操作
    async handleSelect() {
      this.$store.state.globalData.searchName = this.userInput;
      this.$store.state.globalData.blogList = await blogApis.getBlogList(
        this.$store.state.globalData.blogListPage,
        this.$store.state.globalData.searchName
      );
      this.setTotalCount();
    },
    // 设置当前博客总数
    async setTotalCount() {
      this.$store.state.globalData.blogTotalCount =
        await blogApis.getBlogTotalCount(
          this.$store.state.globalData.searchName
        );
    },
  },
  mounted() {
    this.userInput = localStorage.getItem("searchName");
  },
};
</script>

<style scoped>
.menu-out {
  width: 70%;
}
.el-menu-demo-p {
  display: flex;
  justify-content: space-around;
}
.el-menu-item_p {
  text-align: center;
  width: 150px;
}
.el-menu-item_p-input {
  width: 400px;
}

.out {
  /* position:fixed;
  width: 100%;
  opacity: 0.9;
  z-index: 999;
  background: #fff; */
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  width: 100%;
  background-color: rgba(235, 235, 235, 1);
  filter: alpha(opacity=90);
  opacity: 0.9;
}
</style>