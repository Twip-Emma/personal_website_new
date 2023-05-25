<template>
  <div class="info-card">
    <div class="avatar">
      <img :src="userInfo.avatar" alt="Avatar" />
    </div>
    <div class="username">{{ userInfo.nickname }}</div>
    <div class="description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      description: "",
    };
  },
  computed: {
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
    async setTalk() {
      const response = await fetch("https://tenapi.cn/v2/yiyan");
      const data = await response.text();
      this.description = data;
    },
  },
  mounted() {
    this.setTalk();
  },
};
</script>

<style scoped>
.info-card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
}

.avatar {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.username {
  font-weight: bold;
  text-align: center;
}

.description {
  color: #888888;
  text-align: center;
  word-wrap: break-word;
}
</style>
