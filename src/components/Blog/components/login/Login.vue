<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 17:53:11
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-04-13 10:17:54
 * @Description: file content
-->
<template>
  <el-container class="out">
    <div class="a">
      <div class="b"></div>
      <div class="c">
        <div class="d">
          <h1>登录</h1>
          <input type="text" class="e" placeholder="账号" v-model.lazy="userLoginData.card" />
          <input type="password" class="e" placeholder="密码" v-model.lazy="userLoginData.pass" />
          <a href="#" class="f">忘记密码？</a>
          <el-button class="login" type="primary" :disabled="!(userLoginData.card && userLoginData.pass)" @click="userLogin()" :loading="loading">登录</el-button>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
import userApis from "@/apis/userInfo";
export default {
  data() {
    return {
      userLoginData: {
        card: "",
        pass: "",
      },
      loading: false,
    };
  },
  computed: {
  },
  methods: {
    // 登录行为
    async userLogin() {
      // 验证账号和密码不能为空且只允许存在数字和字母大小写
      const reg = /^[a-zA-Z0-9]+$/;
      if (!reg.test(this.userLoginData.card)) {
        this.$message.error("账号只允许存在数字和字母大小写");
        return;
      }
      if (!reg.test(this.userLoginData.pass)) {
        this.$message.error("密码只允许存在数字和字母大小写");
        return;
      }
      // 发送请求并处理结果
      let a = await userApis.userLoginAction(this.userLoginData);
      if (a === true) {
        this.$store.state.userData.logined = true;
        this.pageSwitch("HomePage");
        this.$notify({
          title: "登录",
          message: "登录成功，您当前正在博客列表页面",
          type: "success",
        });
        this.setAdmin()
      }
    },
    async setAdmin(){
      var userData = await userApis.getUserByToken()
      this.$store.state.globalData.administrator = userData.isadmin
    },
    // 页面跳转
    pageSwitch(target) {
      this.$router.push({
        name: target,
        query: {},
      });
    },
  },
};
</script>

<style scoped>
.out {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4%;
}

.a {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
}

.b {
  width: 800px;
  height: 550px;
  /* background-image: url("http://cdngoapl.twip.top/%E4%BA%9A%E6%9E%9C12-1080-1920.png"); */
  background: url("http://cdngoapl.twip.top/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/blogpicA.png");
  /* 图片自适应 */
  background-size: cover;
}

.c {
  width: 300px;
  height: 550px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.d {
  width: 250px;
  height: 500px;
}

.d h1 {
  font: 900 30px "";
}

.e {
  width: 230px;
  margin: 20px 0;
  outline: none;
  border: 0;
  padding: 10px;
  border-bottom: 3px solid rgb(80, 80, 170);
  font: 900 16px "";
}

.f {
  float: right;
  margin: 10px 0;
}

.g {
  position: absolute;
  margin: 20px;
  bottom: 40px;
  display: block;
  width: 200px;
  height: 60px;
  font: 900 30px "";
  text-decoration: none;
  line-height: 50px;
  border-radius: 30px;
  background-image: linear-gradient(to left, #9c88ff, #3cadeb);
  text-align: center;
}

.login {
  width: 100%;
}
</style>