<template>
  <el-container style="opacity: 0.9" class="message">
    <el-card class="animate__animated animate__fadeInLeft publish">
      <!-- 设置你的头像和昵称 -->
      <div class="author">
        <el-avatar
          v-if="userInfo === null"
          icon="el-icon-user-solid"
          size="large"
          style="background-color: #666"
        ></el-avatar>
        <el-avatar v-else :src="userInfo.avatar" size="large"></el-avatar>
        <div>
          <div class="nkname">
            <span class="name" v-if="userInfo === null">匿名用户</span>
            <span class="name" v-else>{{ userInfo.nickname }} </span>
          </div>
        </div>
      </div>
      <!-- form表单，用于发布留言 -->
      <el-form
        :model="messageForm"
        :rules="messageFormRules"
        ref="messageFormRef"
      >
        <el-form-item prop="content">
          <el-input
            :rows="5"
            v-model="messageForm.content"
            type="textarea"
            placeholder="请输入你的留言"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="primary">点击发表</el-button>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card
      v-if="messageList.length > 0"
      class="animate__animated animate__fadeInLeft"
    >
      <ul style="padding: 0" class="comment-list">
        <li class="comment" v-for="ms in messageList" :key="ms.id">
          <el-avatar v-if="ms.avatar !== ''" :src="ms.avatar"></el-avatar>
          <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
          <div class="content">
            <div
              style="display: flex; justify-content: space-between; width: 100%"
            >
              <div class="nkname">
                <span class="name">{{ ms.nickname }} </span>
                <span class="date">{{ ms.createTime }}</span>
              </div>
            </div>
            <p class="reply">{{ ms.content }}</p>
          </div>
        </li>
      </ul>
    </el-card>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      picList: [],
      editing: false,
      userInfo: {
          nickname:"七画一只妖",
        avatar:
          "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
      },
      message: {
        userId: -1,
        content: "",
      },
      messageForm: {
        content: "",
      },
      messageFormRules: {
        content: [
          { required: true, message: "留言内容不能为空！" },
          { min: 0, max: 100, message: "留言内容不超过100字！" },
        ],
      },
    };
  },
  computed:{
    messageList(){
      return this.$store.state.globalData.messageList
    }
  },
  created() {},
  methods: {},
};
</script>

<style scoped>
.el-container {
  display: block;
}

.publish {
  margin-bottom: 20px;
}

.nkname {
  margin: 10px;
}

.author {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
}

.img {
  width: 300px;
  margin: 20px;
}

.comment {
  border-bottom: 1px dashed #ccc;
  margin: 30px 0;
  display: flex;
}

.date {
  color: #999;
  margin-left: 10px;
}

.blog {
  color: #349edf;
  margin-left: 10px;
}

.nkname {
  margin-left: 10px;
  max-width: 530px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.reply {
  margin-left: 10px;
}

.rep {
  color: #349edf;
}

.del {
  color: red;
}

.op {
  color: #ddd;
  font-weight: lighter;
}
.op:hover {
  cursor: pointer;
}

.content {
  text-align: left;
  font-size: 14px;
  flex-grow: 1;
}
</style>