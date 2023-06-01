<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 18:05:54
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-06-01 20:10:54
 * @Description: file content
-->
<template>
  <el-menu-item>
    <div v-if="!logined" style="margin-right: 50px">
      <el-button
        size="mini"
        effect="light"
        type="primary"
        @click="pageSwitch('Login')"
        >登录</el-button
      >
      <el-button
        size="mini"
        effect="light"
        type="warning"
        @click="pageSwitch('Register')"
        >注册</el-button
      >
    </div>
    <div v-if="logined" class="loginInfo">
      <el-avatar :src="userInfo.avatar"></el-avatar>
      <div class="user-option">
        <h3 class="web-font nickname">{{ userInfo.nickname }}</h3>
        <p
          v-if="administrator"
          class="logout"
          @click="
            pageSwitch('Admin');
            changePageState();
          "
        >
          控制台
        </p>
        <p
          class="logout"
          @click="
            pageSwitch('Login');
            logout();
          "
        >
          退出登录
        </p>
        <p class="logout" @click="changeInfo()">修改信息</p>
        <!-- <p
          v-if="adminpage"
          class="logout"
          @click="
            pageSwitch('HomePage');
            changePageState();
          "
        >
          返回主界面
        </p> -->
      </div>
    </div>

    <el-dialog
      title="修改个人信息"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
      width="30%"
      class="changeUserInfo"
    >
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="新的昵称">
          <el-input v-model="newNickname"></el-input>
        </el-form-item>
        <el-form-item label="QQ号">
          <el-input v-model="qqNumber"></el-input>
        </el-form-item>
        <div>通过输入QQ号来获取这个QQ对应的头像</div>
      </el-form>

      <!-- <div>选择新的头像：{{ avatar.name }}</div>
      <div class="a">
        <el-image
          v-for="avatar in avatarList"
          :key="avatar.id"
          class="box"
          :src="avatar.url"
          :fit="'fit'"
          @click="choiceAvatar(avatar)"
        >
        </el-image>
      </div> -->

      <span slot="footer" class="dialog-footer">
        <el-button @click="updateUserInfo('no')">取 消</el-button>
        <el-button type="primary" @click="updateUserInfo('yes')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </el-menu-item>
</template>

<script>
import userApi from "@/apis/userInfo";
export default {
  data() {
    return {
      newNickname: "",
      qqNumber:"",
      avatar: {
        name: "",
        url: "",
      },
      avatarList: [],
      dialogVisible: false,
      form: {
        name: "",
        number: "",
      },
      userInfoEmt: {
        nickname: "nickname",
        avatar: "avatar",
      },
    };
  },
  watch: {
    "$store.state.userData.logined"() {
      this.$forceUpdate();
    },
  },
  computed: {
    // 加载是否是管理员
    administrator() {
      return this.$store.state.globalData.administrator >= 1 ? true : false;
    },
    // 加载登录状态
    logined() {
      if (this.$store.state.userData.logined) {
        return true;
      } else {
        return Number(localStorage.getItem("logined")) === 1 ? true : false;
      }
    },
    // 加载用户信息
    userInfo() {
      if (localStorage.getItem("userInfo")) {
        return JSON.parse(localStorage.getItem("userInfo"));
      } else {
        this.$store.state.userData.logined === false;
        return this.userInfoEmt;
      }
    },
  },
  methods: {
    pageSwitch(target) {
      this.$router.push({
        name: target,
        query: {},
      });
    },
    changePageState() {
      this.adminpage = !this.adminpage;
    },
    // 用户登出
    logout() {
      this.logined2 = false;
      this.componentKey = Math.random();
      localStorage.clear();
      this.$store.state.userData.logined = false;
      this.$forceUpdate();
      this.$message({
        title: "退出",
        message: "您已成功退出当前账号，现已返回主界面",
        type: "success",
      });
    },
    // 呼出修改信息的弹窗
    async changeInfo() {
      this.avatarList = await userApi.getAllAvatarApi();
      var user = JSON.parse(localStorage.getItem("userInfo"));
      this.newNickname = user.nickname;
      this.avatar.url = user.avatar;
      this.dialogVisible = true;
    },
    // 选择头像
    choiceAvatar(avatar) {
      this.avatar = avatar;
    },
    // 提交修改信息
    async updateUserInfo(i) {
      if (i === "no") {
        this.dialogVisible = false;
      } else {
        let avaterUrl = "http://q1.qlogo.cn/g?b=qq&nk=" + this.qqNumber + "&s=640"
        await userApi.changeUserInfoApi(this.newNickname, avaterUrl);
        this.$message({
          title: "修改",
          message: "修改个人信息成功",
          type: "success",
        });
        this.dialogVisible = false;
      }
    },
    async setAdmin() {
      var userData = await userApi.getUserByToken();
      this.$store.state.globalData.administrator = userData.isadmin;
    },
  },
  mounted() {
    if (localStorage.getItem("token")) {
      this.setAdmin();
    }
  },
};
</script>

<style scoped>
.a {
  display: flex;
  flex-wrap: wrap;
}

.box {
  width: calc(25% - 10px);
  height: 100px;
  margin-top: 10px;
  margin-left: 5px;
  margin-right: 5px;
}

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
  background-color: #cccccc;
  visibility: hidden;
  opacity: 0;
  color: #000000;
  /* border: 1px solid #eee; */
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