<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 09:40:09
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-21 20:17:07
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
      <div
        class="typo m-padded-lr-responsive m-padded-tb-large"
        v-html="blog.content"
      ></div>
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
          <div class="give-money">
            <div class="give-money-item">
              <el-image :src="wechart" title="微信支付"></el-image>
              <p>微信</p>
            </div>
            <div class="give-money-item">
              <el-image :src="alipay" title="支付宝支付"></el-image>
              <p>支付宝</p>
            </div>
          </div>
          <el-button class="zanshang" slot="reference" type="danger" round plain
            >赞赏</el-button
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
  data() {
    return {
      administrator: false,
      userInfo: [],
      blog: {
        id: 0,
        title: "错误",
        content:"如果宁看见这个就说明服务器寄了",
        flag: "寄了",
        views: 114514,
        createTime: "2021-08-16T14:36:31.064+00:00",
        updateTime: "2021-08-16T14:36:31.064+00:00",
        description:
          "\n#### 介绍\n这是一个多人项目中的一个模块，我负责了数据展示的部分，用原生的Canvas实现了进度条，饼图，雷达图，水滴图，日历图等图表的展现。采用面向对象的方式，将每个图表分为一个独立的类，将dom元素和option选项，option",
        type: {
          id: 1,
          name: "web前端",
          pic_url: "http://cdngoapl.twip.top/pic_2.jpg",
          color: "#59c9fb",
        },
        tags: [
          { id: 1, name: "JavaScript" },
          { id: 2, name: "css" },
          { id: 3, name: "html" },
        ],
        user: {
          id: 1,
          nickname: "七画一只妖",
          avatar:
            "http://cdngoapl.twip.top/%E7%A5%9E%E9%B9%BF%E7%A5%88%E7%A6%8F-%E5%A4%B4%E5%83%8F%E5%B0%BA%E5%AF%B8.jpg",
          type: "1",
          createTime: "2021-10-13T13:55:12.179+00:00",
          updateTime: "2021-10-13T13:55:12.179+00:00",
          lastLoginTime: "2021-10-13T13:55:12.000+00:00",
        },

        tagIds: null,
      },
      wechart:
        "image.png",
      alipay:
        "https://sdorica.yuewuzhijian.top/sdorica-figure-light/e0046/e0046s5_figure.webp",
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
    // formatTags(){
    //   console.log(globalFunction.formatTagsApi("甲|乙|丙"))
    // },
    async setBlogInfo(){
      let blog = await blogApis.getBlogInfoByIdApi()
      blog.tags = globalFunction.formatTagsApi(blog.tags)
      this.blog = blog
      // console.log(await blogApis.getBlogInfoByIdApi())
    }
  },
  mounted(){
    this.setBlogInfo()
    // this.formatTags()
  }
};
</script>

<style scoped>
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