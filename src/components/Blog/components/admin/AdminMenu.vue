<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 16:42:13
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-04 11:25:35
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
          <!-- 用户管理 -->
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-view"></i>
              <span>用户面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">普通用户管理</template>
              <el-menu-item index="1-1" @click="adminJumpTo('AdminUserFrom')"
                >基本信息</el-menu-item
              >
              <el-menu-item index="1-2" @click="adminJumpTo('AdminUserFrom')"
                >账号密码</el-menu-item
              >
              <el-menu-item index="1-3" @click="adminJumpTo('AdminUserFrom')"
                >身份控制</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 文章管理 -->
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-tickets"></i>
              <span>文章面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">博客管理</template>
              <el-menu-item index="2-1" @click="adminJumpTo('AdminUserFrom')"
                >全部博客</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- 留言管理 -->
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>留言面板</span>
            </template>
            <el-menu-item-group>
              <template slot="title">留言面板</template>
              <el-menu-item index="3-1" @click="adminJumpTo('AdminUserFrom')"
                >全部留言</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <!-- KEY管理、缓存管理 -->
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>API管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">添加、验证</template>
              <el-menu-item index="3-1" @click="adminJumpTo('AdminApiManagement')"
                >操作API</el-menu-item
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
</style>