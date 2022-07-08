<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 17:53:11
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-08 14:01:01
 * @Description: file content
-->
<template>
  <el-container class="out">
    <div class="a">
      <div class="b"></div>
      <div class="c">
        <div class="d">
          <h1>登录</h1>
          <!-- <input type="text" class="e" placeholder="用户名（注册用）" v-model="userLoginData.userName" /> -->
          <input type="text" class="e" placeholder="账号" v-model="userLoginData.card" />
          <input type="password" class="e" placeholder="密码" v-model="userLoginData.pass" />
          <a href="#" class="f">忘记密码？</a>
          <!-- <el-button type="primary" icon="el-icon-search">搜索</el-button> -->
          <el-button class="login"  type="primary" @click="userLogin()">登录</el-button>
        </div>
      </div>
    </div>
  </el-container>
</template>

<script>
// import {mapState,mapGetters,mapActions} from "vuex"
// import {mapActions} from "vuex"
import userApis from "@/apis/userInfo"
export default {
  data() {
    return {
      userLoginData:{
        card:"",
        pass:""
      }
    };
  },
  methods:{
    async userLogin(){
      // userApis.userLoginAction(this.userLoginData).then(
      //   res => {
      //     console.log(res)
      //   })
      let a = await userApis.userLoginAction(this.userLoginData)
      if(a === true){
        this.$store.state.userData.logined = true
        this.pageSwitch("HomePage")
        this.$notify({
          title: '登录',
          message: '登录成功，您当前正在博客列表页面',
          type: 'success'
        });
      }else if(a === 1204){
        this.$notify({
          title: '密码或账号',
          message: '登录失败，请检查密码或账号是否输入正确',
          type: 'warning'
        });
      }
      console.log(a)
    },

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
  /* position: relative; */
  /* top: 50px; */
  /* margin-trim: 60px; */
  /* left: 20%; */
  /* width: 100%; */
  /* height: 80%; */
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
}

.b {
  width: 800px;
  height: 550px;
  background-image: url("https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0002/e0002s5_figure.png");
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