<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 18:05:54
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-08 14:07:17
 * @Description: file content
-->
<template>
  <el-menu-item>
    <div v-if="!logined" style="margin-right: 50px">
      <el-button size="mini" effect="light" type="primary" @click="pageSwitch('Login')"
        >登录</el-button
      >
      <el-button size="mini" effect="light" type="warning" @click="pageSwitch('Register')"
        >注册</el-button
      >
    </div>
    <div v-else class="loginInfo">
      <el-avatar :src="userInfo.avatar"></el-avatar>
      <div class="user-option">
        <h3 class="web-font nickname">{{ userInfo.nickname }}</h3>
        <p v-if="administrator" class="logout" @click="pageSwitch('Admin');changePageState()">控制台</p>
        <p class="logout" @click="logout();pageSwitch('Start')">退出登录</p>
        <p class="logout">修改信息</p>
        <p v-if="adminpage" class="logout"  @click="pageSwitch('HomePage');changePageState()">返回主界面</p>
      </div>
    </div>
  </el-menu-item>
</template>

<script>
export default {
  data() {
    return {
      // administrator: true, // 判断是否是管理员
      // logined: true, // 登录状态
      // adminpage: false, // 判断是否是在管理页面
    };
  },
  computed: {
    administrator(){
      // return this.$store.state.userData.administrator
      return sessionStorage.getItem("administrator")
    },
    logined(){
      // return this.$store.state.userData.logined
      if(!sessionStorage.getItem("logined")){
        if (this.$store.state.userData.logined === false){
          if(sessionStorage.getItem("logined") === true){
            return true
          }else{
            return false
          }
        }else{
          return true
        }
      }
      return sessionStorage.getItem("logined")
    },
    adminpage(){
      // return this.$store.state.userData.adminpage
      return sessionStorage.getItem("adminpage")
    },
    userInfo(){
      // return this.$store.state.userData.userInfo
      
      return JSON.parse(sessionStorage.getItem("userInfo"))
    }
  },
  methods: {
    pageSwitch(target) {
      this.$router.push({
        name: target,
        query: {},
      });
    },
    changePageState(){
      this.adminpage = !this.adminpage
    },
    logout(){
      // this.$store.state.userData.logined = false
      sessionStorage.clear()
        this.$notify({
          title: '退出',
          message: '您已成功退出当前账号，现已返回主界面',
          type: 'success'
        });
    }
  },
  mounted(){
    console.log("进入了登录界面")
  }
};
</script>

<style scoped>
.loginInfo {
  flex-shrink: 0;
  /*background-color: #545c64;*/
  color: white;
  height: 60px;
  border: none;
  width: 160px;
  position: relative;
}
.loginInfo .el-avatar {
  width: 36px;
  height: 36px;
  margin: 0 auto;
  z-index: 200;
}
.loginInfo .user-option {
  position: absolute;
  top: 60px;
  width: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 14px;
  text-align: center;
  line-height: 30px;
  background-color: gray;
  visibility: hidden;
  opacity: 0;
  color: #333;
  border: 1px solid #eee;
  border-radius: 5px;
}
.loginInfo .logout {
  margin: 10px auto;
  padding: 0;
  width: 100%;
}
.loginInfo .logout:hover {
  background-color: #eee;
}
/* .loginInfo:hover {
  cursor: pointer;
}
.loginInfo:hover .el-avatar {
  transform: translate(0, 50%) scale(1.5);
  transition: .3s;
} */
.loginInfo:hover .user-option {
  z-index: 10;
  visibility: visible;
  opacity: 1;
  transition: opacity 0.4s;
}
.zZindex {
  margin-top: 300px;
  padding-top: 100px;
}
.menu-expend {
  display: none !important;
}
.el-menu-hidden {
  /*display: none;*/
  position: absolute;
  top: 60px;
  left: 0;
  border-top: 1px solid #ccc;
  border-right: none;
  width: 100%;
}
.el-menu-hidden .el-menu-item {
  border-bottom: 1px solid #ccc;
}
@media screen and (max-width: 1000px) {
  .search_input {
    visibility: hidden;
  }
}
@media screen and (max-width: 768px) {
  .el-menu /deep/ .el-menu-item {
    background-color: rgba(0, 0, 0, 0.3) !important;
  }
  .el-menu-demo {
    display: none;
  }
  .title {
    width: 100%;
    background-position-x: center;
  }
  .menu-expend {
    display: block !important;
    position: fixed;
    top: 18px;
    left: 150px;
  }
  .menu-expend:hover {
    color: #ffd04b;
    cursor: pointer;
  }
  .title {
    background-position-y: 0;
  }
}
</style>