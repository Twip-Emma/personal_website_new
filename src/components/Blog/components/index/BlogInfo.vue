<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 09:40:09
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-06 15:06:19
 * @Description: file content
-->
<template>
  <el-container class="animate__animated animate__fadeIn">
    <el-card
      style="background-color: rgba(255, 255, 255, 1)"
      class="first-card"
    >
      <div slot="header" class="total blog-info">
        <div class="user-info">
          <el-avatar size="small" :src="blog.user.avatar"></el-avatar>
          <a href="#" class="header">{{ blog.user.nickname }}</a>
        </div>
        <div class="blog-date">
          <i class="el-icon-date"></i>
          <span>{{ formatTime(blog.ctime) }}</span>
        </div>
        <div>
          <i class="el-icon-view"></i>
          <span>{{ blog.views }}</span>
        </div>
      </div>
      <el-image class="blog-pic" :src="blog.firstPicture"></el-image>
      <hr />
      <h2 class="blog-title header">
        {{ blog.title }}
        <el-tag
          effect="plain"
          type="warning"
          style="font-weight: bold; font-size: small; margin-left: 20px"
        >
          {{ blog.flag }}
        </el-tag>
      </h2>
      <mavon-editor v-html="blog.content" boxShadowStyle="" class="content"></mavon-editor>
      <br>
      <div class="tags">
        <div class="tag-item" v-for="tag in blog.tags" :key="tag.id">
          <div class="sjx-outer">
            <div class="sjx-inner"></div>
          </div>
          <div class="tag">
            {{ tag.name }}
          </div>
        </div>
      </div>
      <div class="appreciate">
        <el-popover
          placement="bottom"
          title=""
          width="300"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
        </el-popover>
      </div>
      <div class="author">
        <ul>
          <li>作者 {{ blog.user.nickname }}</li>
          <li>发表时间 {{ formatTime(blog.ctime) }}     修改时间 {{formatTime(blog.mtime)}}</li>
        </ul>
      </div>
      <!-- 展示评论区 -->
      <div shadow="never" class="comments">
        <div class="header">发送一条友善的评论吧~</div>
        <CommentBlog />
      </div>
    </el-card>
  </el-container>
</template>

<script>
import CommentBlog from "@/components/Blog/components/index/CommentBlog";
import blogApis from "@/apis/blogInfo"
import globalFunction from '@/apis/globalFunction'
export default {
  components: { CommentBlog },
  props:["id"],
  computed:{},
  data() {
    return {
      codeData:"",
      administrator: false,
      userInfo: [],
      blog: {
        id: 0,
        title: "错误",
        content:"如果宁看见这个就登录过期了",
        flag: "寄了",
        views: 0,
        createTime: "",
        updateTime: "",
        description:"",
        type: {},
        tags: [],
        user: {},
        tagIds: null,
      },
      wechart:
        "image.png",
      commentForm: {
        content: "",
      },
    };
  },
  methods:{
    // 日期格式化
    formatTime(basetime){
      return globalFunction.formatTimeApi(basetime)
    },
    async setBlogInfo(){
      let blog = await blogApis.getBlogInfoByIdApi(this.$store.state.globalData.blogId)
      blog.tags = globalFunction.formatTagsApi(blog.tags)
      this.blog = blog
    }
  },
  mounted(){
    this.setBlogInfo()
  }
};
</script>

<style scoped>
.content{
  z-index: 2;
}
.el-card {
  width: 100%;
}
.first-card {
  border-radius: 10px 10px 0 0;
  position: relative;
  padding-bottom: 100px;
}
/*text-align: center;*/
.first-card .blog-pic {
  border-radius: 8px;
}
hr.style-one {
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(64, 158, 255, 0),
    rgba(64, 158, 255, 0.75),
    rgba(64, 158, 255, 0)
  );
}
.appreciate {
  text-align: center;
}
.give-money {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #409eff;
  border-radius: 10px;
}
.give-money .give-money-item {
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  text-align: center;
}
.give-money .give-money-item .el-image {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
.give-money .give-money-item p {
  font-size: smaller;
  font-weight: bold;
  color: #3a8ee6;
  display: block;
  line-height: 20px;
  margin: 0;
}
.tags {
  display: flex;
  align-items: center;
  margin-left: 50px;
}
.tag-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20px;
}
.tag {
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: #ecf5ff;
  border: 1px solid #409eff;
  color: #409eff;
  display: flex;
}
.sjx-outer {
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-right: 7px solid #409eff;
  position: relative;
}
.sjx-inner {
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-right: 7px solid #ecf5ff;
  top: -7px;
  left: 1px;
  position: absolute;
}
.author {
  text-align: left;
  background-color: #fcfff5;
  box-shadow: 0 0 0 1px #a3c293 inset;
  color: #2c662d;
  width: 100%;
  position: absolute;
  left: 0;
  margin: 20px 0;
  padding: 20px 0;
  font-size: small;
  font-family: PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB,
    Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
}
.comments {
  margin-top: 150px;
  text-align: left;
}
.comments .reply {
  margin-left: 40px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
.comments .reply:hover {
  color: #000000;
  cursor: pointer;
}
.comments .delete {
  margin-left: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
.comments .delete:hover {
  color: #000000;
  cursor: pointer;
}
.comments .header {
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 1.28571429rem;
  color: rgba(0, 0, 0, 0.87);
}
.blog-pic {
  width: 100%;
}
.blog-title {
  text-align: center;
}
.blog-info {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 13px;
}
.blog-info .blog-date {
  margin-right: 5px;
}
.blog-info .user-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
}
.blog-info .user-info .el-avatar {
  margin-right: 5px;
  width: 22px;
  height: 22px;
}
.blog-info .user-info .header {
  text-decoration: none;
  color: #3a8ee6;
  font-weight: bold;
}
@media screen and (max-width: 768px) {
  .tags {
    margin-left: 0;
  }
  hr {
    display: none;
  }
  .comment-content {
    font-size: 12px !important;
  }
}
@media only screen and (max-width: 480px) {
  h2 {
    font-weight: normal;
  }
  code,
  pre {
    font-size: 13px !important;
  }
}
</style>