<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 12:14:06
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-06-01 14:59:51
 * @Description: file content
-->
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
      <el-form :model="messageForm" :rules="messageFormRules" ref="messageForm">
        <el-form-item prop="content">
          <el-input
            :rows="5"
            v-model="messageForm.content"
            type="textarea"
            placeholder="请输入你的留言"
          ></el-input>
        </el-form-item>
        <el-form-item style="text-align: right">
          <el-button type="primary" @click="publishContent()"
            >点击发表</el-button
          >
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
import blogApis from "@/apis/blogInfo";
import globalFunction from "@/apis/globalFunction";
export default {
  data() {
    return {
      // 页码
      currentPage: 1,
      // 总数
      total: 0,
      picList: [],
      editing: false,
      messageList: [
        {
          id: "xxxx1",
          avatar:
            "http://cdngoapl.twip.top/%E7%A5%9E%E9%B9%BF%E7%A5%88%E7%A6%8F-%E5%A4%B4%E5%83%8F%E5%B0%BA%E5%AF%B8.jpg",
          nickname: "错误",
          createTime: "2021-11-17",
          content: "【默认】如果宁看见这条消息代表数据没有正常传递",
        },
      ],
      userInfo: {
        nickname: "如果宁看到了这个信息，说明宁的登录过期了",
        avatar:
          "http://cdngoapl.twip.top/%E7%A5%9E%E9%B9%BF%E7%A5%88%E7%A6%8F-%E5%A4%B4%E5%83%8F%E5%B0%BA%E5%AF%B8.jpg",
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
          { min: 1, max: 100, message: "留言内容不超过100字！" },
        ],
      },
    };
  },
  methods: {
    async setData() {
      const data = await blogApis.getBlogReplyById(
        this.$store.state.globalData.blogId,
        this.currentPage
      );
      this.total = data[data.length - 1];
      data.pop();
      this.messageList = data;
    },
    // 发表博客
    async publishContent() {
      this.$refs.messageForm.validate((valid) => {
        if (valid) {
          blogApis.publishContentApi(
            this.messageForm.content,
            this.$store.state.globalData.blogId
          );
          this.$message({
            title: "评论",
            message: "评论成功",
            type: "success",
          });
          this.messageForm.content = "";
          this.$nextTick(() => {
            this.setData();
          });
          this.$refs.messageForm.resetFields();
        } else {
          // 表单验证未通过，给出提示
          this.$message({
            message: "请填写完整表单",
            type: "warning",
          });
        }
      });
    },
    formatTime(basetime) {
      return globalFunction.formatTimeApi(basetime);
    },
    // 分页变化
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
      this.setData();
    },
  },
  mounted() {
    this.setData();
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
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