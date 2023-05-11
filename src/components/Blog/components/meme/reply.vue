<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 12:14:06
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-11 16:47:29
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
      <el-form :model="replyForm" :rules="replyFormRules" ref="replyForm">
        <el-form-item prop="content">
          <el-input
            :rows="5"
            v-model="replyForm.content"
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
      v-if="replyList.length > 0"
      class="animate__animated animate__fadeInLeft"
    >
      <ul style="padding: 0" class="comment-list">
        <li class="comment" v-for="ms in replyList" :key="ms.id">
          <el-avatar v-if="ms.user.avatar !== ''" :src="ms.user.avatar"></el-avatar>
          <el-avatar v-else icon="el-icon-user-solid"></el-avatar>
          <div class="content">
            <div
              style="display: flex; justify-content: space-between; width: 100%"
            >
              <div class="nkname">
                <span class="name">{{ ms.user.nickname }} </span>
                <span class="date">{{ formatTime(ms.ctime) }}</span>
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
import memeApis from "@/apis/meme";
import globalFunction from "@/apis/globalFunction";
export default {
  data() {
    return {
      // 当前用户信息（用于设置回复栏的头像昵称）
      userInfo: {},
      // 评论列表
      replyList: [],
      // 回复表单
      replyForm: {
        memeId: "",
        content: "",
      },
      // 回复表单校验
      replyFormRules: {
        content: [
          { required: true, message: "留言内容不能为空！" },
          { min: 0, max: 100, message: "留言内容不超过100字！" },
        ],
      },
    };
  },
  watch: {
    memeId: function() {
      this.getMemeReply();
    }
  },
  props: {
    memeId: {
      type: String,
      default: "",
    },
  },
  methods: {
    async getMemeReply() {
      this.replyList = await memeApis.queryReply(this.memeId);
    },
    // 发表博客
    async publishContent() {
      this.$refs.replyForm.validate((valid) => {
        if (valid) {
          this.replyForm.memeId = this.memeId;
          memeApis.insertReply(this.replyForm);
          this.$message({
            title: "评论",
            message: "评论成功",
            type: "success",
          });
          this.replyForm.content = "";
          this.$nextTick(() => {
            this.getMemeReply();
          });
          this.$refs.replyForm.resetFields();
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
  },
  mounted() {
    this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
    this.getMemeReply();
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