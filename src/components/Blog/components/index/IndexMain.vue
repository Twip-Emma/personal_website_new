<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-18 20:59:53
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-04-06 11:01:03
 * @Description: file content
-->
<template>
  <div>
    <el-container v-loading.fullscreen.lock="fullscreenLoading">
      <el-row :gutter="12">
        <!-- 博客列表容器 -->
        <el-col :xs="24" :sm="17">
          <el-card style="background-color: rgba(255, 255, 255, 0.9)">
            <!-- 顶栏：显示博客总篇数 -->
            <div slot="header" class="total">
              <div class="title">
                <i
                  v-if="selected"
                  class="el-icon-back"
                  @click="updateBlogList"
                ></i>
                <span>全部博客</span>
              </div>
              <span
                >共
                <span style="color: #3a8ee6; font-size: 20px">{{
                  totalcount
                }}</span>
                篇</span
              >
            </div>

            <!-- 显示每一篇博客 -->
            <!-- <div v-loading="loading"
          style="width: 100%"> -->
            <el-row
              type="flex"
              align="middle"
              style="flex-wrap: wrap"
              :gutter="20"
              v-for="blog in blogList"
              :key="blog.id"
              shadow="never"
              class="blog-content"
            >
              <el-col class="img" :xs="24" :sm="8">
                <el-image lazy :src="blog.firstPicture"></el-image>
              </el-col>
              <el-col :xs="24" :sm="16">
                <div @click="getBlogInfo(blog.id)">
                  <h3>{{ blog.title }}</h3>
                  <p class="description">{{ blog.description }}</p>
                  <div class="blog-info">
                    <div class="user-info">
                      <el-avatar
                        size="small"
                        :src="blog.user.avatar"
                      ></el-avatar>
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
                    <div class="blog-type">
                      <el-tag effect="plain">{{ blog.typeName }}</el-tag>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <!-- </div> -->
          </el-card>
          <!-- 分页 -->
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :page-size="queryInfo.pagesize"
            :current-page="queryInfo.pagenum"
            :total="totalcount"
          >
          </el-pagination>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
// import Avatar from "@/components/index/Avatar";
import blogApis from "@/apis/blogInfo";
import globalFunction from "@/apis/globalFunction";
export default {
  data() {
    return {
      queryInfo: {
        query: "",
        pagenum: 1,
        pagesize: 3,
      },
      selected: false,
      loading: true,
      fullscreenLoading: true,
    };
  },
  computed: {
    blogList() {
      return this.$store.state.globalData.blogList;
    },
    totalcount() {
      return this.$store.state.globalData.blogTotalCount;
    },
  },
  methods: {
    // 日期格式化
    formatTime(basetime) {
      return globalFunction.formatTimeApi(basetime);
    },
    // 跳转到某个博客内
    getBlogInfo(id) {
      console.log("博客id的值是" + id);
      this.$store.state.globalData.blogId = id
      sessionStorage.setItem("blogId", id)
      this.$router.push({
        name: "BlogInfo",
        query: {
          id: id,
        },
      });
    },
    // 初始化博客总数
    async setTotalCount() {
      this.$store.state.globalData.blogTotalCount =
        await blogApis.getBlogTotalCount(
          this.$store.state.globalData.searchName
        );
    },
    // 初始化当前页面博客列表
    async getFirstPage() {
      this.$store.state.globalData.blogList = await blogApis.getBlogList(
        this.$store.state.globalData.blogListPage,
        this.$store.state.globalData.searchName
      );
      this.fullscreenLoading = false;
    },
    // 翻页行为
    handleCurrentChange(val) {
      this.fullscreenLoading = true;
      this.queryInfo.pagenum = val;
      this.$store.state.globalData.blogListPage = val;
      this.getFirstPage();
      this.loading = false;
    },
  },
  mounted() {
    this.setTotalCount();
    this.getFirstPage();
    // 初始化页号
    this.queryInfo.pagenum = this.$store.state.globalData.blogListPage;
  },
};
</script>

<style scoped>
.el-pagination {
  padding-bottom: 20px;
}
.el-card /deep/ .el-card__body {
  padding: 0;
}

.blog-type {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 40px;
}
.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: larger;
  font-weight: bold;
}
.total .title {
  display: flex;
  align-items: center;
}
.total .title .el-icon-back {
  font-weight: bolder;
  color: #3a8ee6;
  margin-right: 10px;
}
.total .title .el-icon-back:hover {
  cursor: pointer;
}
.blog-content:hover {
  /*border-left: 5px solid #3a8ee6;*/
  /*border-right: 5px solid #3a8ee6;*/
  background-color: rgba(58, 142, 230, 0.3);
  cursor: pointer;
}
.blog-content:hover .el-tag {
  color: white;
  background-color: #3a8ee6;
}
.blog-content {
  padding: 10px;
  height: auto;
  border-bottom: 1px solid #c7a35c;
  /*border-bottom: 1px solid rgba(34, 36, 38, .15);*/
  transition: 0.3s;
}
.blog-content .el-image {
  border-radius: 5px;
  box-sizing: border-box;
  flex-shrink: 0;
}
.blog-content .blog-info {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 10px;
}
.blog-content .blog-info .user-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
}
.blog-content .blog-info .user-info .el-avatar {
  margin-right: 5px;
  width: 22px;
  height: 22px;
}
.blog-content .blog-info .user-info .header {
  text-decoration: none;
  color: #3a8ee6;
  font-weight: bold;
}
.blog-content .blog-info .blog-date {
  margin-right: 15px;
}
.blog-content .blog-info .blog-type {
  margin-left: auto;
}
.description {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font: 300 1em/1.8 PingFang SC, Lantinghei SC, Microsoft Yahei,
    Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
}
@media screen and (max-width: 768px) {
  .blog-date {
    display: none;
  }
  .el-pagination {
    width: 100%;
  }
}
</style>