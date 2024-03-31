<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 16:42:13
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2024-03-31 13:33:00
 * @Description: file content
-->
<template>
  <div class="out1">
    <!-- <el-row class="tac">
      <el-col
        > -->

        <el-menu
          class="user_el_menu"
          default-active="2"
          @open="handleOpen"
          @close="handleClose"
        >
          <!-- 总控室 -->
          <el-submenu index="0">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>总控面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理网站和服务器状态</template>
              <el-menu-item index="0-1" @click="adminJumpTo('admin-web-overview')"
                >状态总览</el-menu-item
              >
              <el-menu-item index="0-2" @click="adminJumpTo('AdminApiManagement')"
                >网站管理</el-menu-item
              >
              <el-menu-item index="0-3" @click="adminJumpTo('AdminApiManagement')"
                >服务器管理</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 用户管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>用户面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">普通用户管理</template>
              <el-menu-item index="1-1" @click="adminJumpTo('AdminUserFrom')"
                >用户管理</el-menu-item
              >
              <el-menu-item v-if="isSuper" index="1-2" @click="adminJumpTo('admin-user-permission')"
                >权限管理</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 文章管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>博客面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理博客信息与评论</template>
              <el-menu-item index="2-1" @click="adminJumpTo('admin-blog-info')"
                >博客管理</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 评论管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>评论面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理博客评论或者网站留言</template>
              <el-menu-item index="3-1" @click="adminJumpTo('admin-reply-blog')"
                >博客留言管理</el-menu-item
              >
              <el-menu-item index="3-2" @click="adminJumpTo('admin-reply-web')"
                >网站留言管理</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- KEY管理、缓存管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-link"></i>
              <span>API管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">管理网站的API</template>
              <el-menu-item index="4-1" @click="adminJumpTo('AdminApiManagement')"
                >图片API</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      <!-- </el-col>
    </el-row> -->
  </div>
</template>

<script>
export default {
  computed: {
    // 加载是否是超级管理员
    isSuper() {
      return this.$store.state.globalData.administrator == 2 ? true : false;
    },
  },
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
    //点击选项卡进行切换页面
    adminJumpTo(target) {
      this.$router.push({
        name: target,
        query: {},
      });
    },
  },
};
</script>

<style scoped>
.user_el_menu:not(.el-menu--collapse) {
  min-height: 100%;
}

.out{
  position:fixed;
  width: 25%;
}

.out1{
  height: 90vh;
}
</style>