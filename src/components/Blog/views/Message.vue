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
          <el-button type="primary" @click="addMessage()">点击发表</el-button>
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
                <span class="date">{{ formatTime(ms.ctime) }}</span>
              </div>
            </div>
            <p class="reply">{{ ms.content }}</p>
          </div>
        </li>
      </ul>
    </el-card>
    <!-- 分页 -->
    <el-pagination
      background
      @current-change="handlePageChange"
      :page-size="10"
      :current-page="1"
      :total="total"
    >
    </el-pagination>
  </el-container>
</template>

<script>
import globalFunction from "@/apis/globalFunction";
export default {
  data() {
    return {
      picList: [],
      editing: false,
      userInfo: {},
      messageList: [
        {
          id: "123123123123",
          avatar: "",
          nickname: "帅气的七画",
          ctime: 12398192389123,
          content: "如果宁看到了这个消息就说明服务器寄了",
        },
      ],
      // 页码
      currentPage: 1,
      // 总数
      total: 0,
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
  computed: {},
  methods: {
    // 时间戳转可视化时间
    formatTime(basetime) {
      return globalFunction.formatTimeApi(basetime);
    },
    // 初始化留言列表
    async setData() {
      const data = await globalFunction.getAllMessageApi(this.currentPage);
      this.total = data[data.length - 1];
      data.pop();
      this.messageList = data;
    },
    // 留言行为
    async addMessage() {
      var code = await globalFunction.publishMessageApi(
        this.messageForm.content
      );
      if (code === 200) {
        this.$message({
          title: "评论",
          message: "评论成功",
          type: "success",
        });
        this.messageForm.content = "";
        this.setData()
      } else {
        this.$message({
          title: "评论",
          message: "评论失败，与服务器交互出现异常",
          type: "warning",
        });
      }
    },
    // 分页变化
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
      this.setData();
    },
  },
  created() {},
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.setData();
  },
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