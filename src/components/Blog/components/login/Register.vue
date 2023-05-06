<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 17:53:11
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-06 16:40:31
 * @Description: file content
-->
<template>
  <el-container class="out">
    <div class="a">
      <div class="b"></div>
      <div class="c">
        <div class="d">
          <h1>注册</h1>
          <input type="text" class="e" placeholder="用户名" v-model.trim="userRegisterData.nickname" />
          <input type="text" class="e" placeholder="账号" v-model.trim="userRegisterData.card" />
          <input type="password" class="e" placeholder="密码" v-model.trim="userRegisterData.pass" />
          <a href="#" class="f">忘记密码？</a>
          <el-button class="login" type="primary" :disabled="!(userRegisterData.nickname && userRegisterData.card && userRegisterData.pass)" @click="userLogin()" :loading="loading">注册</el-button>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
import userApis from "@/apis/userInfo"
export default {
  data() {
    return {
      userRegisterData:{
        nickname:"",
        card:"",
        pass:""
      },
      loading: false
    };
  },
  methods:{
    // 登录行为
    async userLogin(){
      // 验证是否合法
      const reg = /^[a-zA-Z0-9]+$/;
      if (!reg.test(this.userRegisterData.card)) {
        this.$message.error("账号只允许存在数字和字母大小写");
        return;
      }
      if (!reg.test(this.userRegisterData.pass)) {
        this.$message.error("密码只允许存在数字和字母大小写");
        return;
      }
      const regExp = /^[\u4e00-\u9fa5_a-zA-Z0-9_]{3,10}$/;
      if (!regExp.test(this.userRegisterData.nickname)) {
        this.$message.error("用户名仅支持3-10位");
        return;
      }
      this.loading = true;
      let a = await userApis.userRegisterAction(this.userRegisterData)
      this.loading = false;
      if(a === true){
        this.$store.state.userData.logined = true
        this.pageSwitch("HomePage")
        this.$message({
          title: '注册',
          message: '注册成功，欢迎您',
          type: 'success'
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
  }
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
  background: url("http://cdngoapl.twip.top/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/blogpicB.png");
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

.login{
    width: 100%;
}
</style>