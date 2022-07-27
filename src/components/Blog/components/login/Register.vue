<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 17:53:11
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-27 18:14:12
 * @Description: file content
-->
<template>
  <el-container class="out">
    <div class="a">
      <div class="b"></div>
      <div class="c">
        <div class="d">
          <h1>注册</h1>
          <input type="text" class="e" placeholder="用户名" v-model="userRegisterData.nickname" />
          <input type="text" class="e" placeholder="账号" v-model="userRegisterData.card" />
          <input type="password" class="e" placeholder="密码" v-model="userRegisterData.pass" />
          <a href="#" class="f">忘记密码？</a>
          <!-- <el-button type="primary" icon="el-icon-search">搜索</el-button> -->
          <el-button class="login"  type="primary" @click="userLogin()">注册</el-button>
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
      }
    };
  },
  methods:{
    // 登录行为
    async userLogin(){
      if(this.userLoginData.card === "" || this.userLoginData.pass === "" || this.userLoginData.nickname){
        this.$notify({
          title: '失败',
          message: '账号名或密码或昵称不能为空',
          type: 'warning'
        });
        return
      }

      let a = await userApis.userRegisterAction(this.userRegisterData)
      if(a === true){
        this.$store.state.userData.logined = true
        this.pageSwitch("HomePage")
        this.$notify({
          title: '注册',
          message: '注册成功，欢迎您',
          type: 'success'
        });
      }else if(a === 1204){
        this.$notify({
          title: '注册失败',
          message: '注册失败，此账号已被注册了，再试试吧~',
          type: 'warning'
        });
      }else{
        this.$notify({
          title: '异常',
          message: '注册失败，与服务器通信出现了异常',
          type: 'warning'
        });
      }
      console.log(a)
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
  background-image: url("https://n.sinaimg.cn/sinakd10120/350/w1200h750/20200731/db91-ixeeiry9462431.jpg");
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