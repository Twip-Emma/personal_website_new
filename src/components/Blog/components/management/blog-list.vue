<template>
  <div>
    <h2>我的博客</h2>
    <el-table :data="blogList" style="width: 100%">
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="ctime" label="创建日期"></el-table-column>
      <el-table-column prop="mtime" label="编辑日期"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editBlog(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="manageComments(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="编辑博客"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <BlogEdit :blogForm="initBlogData" @call-index="setData" />
    </el-dialog>
  </div>
</template>

<script>
import BlogEdit from "./blog-edit.vue";

import blogApis from "@/apis/blogInfo";
import globalFunction from "@/apis/globalFunction";
export default {
  data() {
    return {
      blogList: [],
      initBlogData: {
        id: "",
        title: "",
        flag: "",
        description: "",
      },
      dialogVisible: false,
    };
  },
  components: { BlogEdit },
  methods: {
    // 编辑博客的逻辑
    editBlog(blog) {
      console.log(blog);
      this.dialogVisible = true;
      this.initBlogData.id = blog.id;
      this.initBlogData.title = blog.title;
      this.initBlogData.flag = blog.flag;
      this.initBlogData.description = blog.description;
    },
    manageComments(blog) {
      this.$confirm(`此操作将删除这条内容, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await blogApis.deleteBlogByUser(blog.id);
          this.$message({
            type: "success",
            message: `删除成功!`,
          });
          this.$nextTick(() => {
            this.setData();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消",
          });
          return;
        });
    },
    async setData() {
      this.dialogVisible = false;
      this.blogList = await blogApis.queryBlogListByUser();
      this.blogList.forEach((item) => {
        item.ctime = this.formatTime(item.ctime);
        item.mtime = this.formatTime(item.mtime);
      });
    },
    // 日期格式化
    formatTime(basetime) {
      return globalFunction.formatTimeShortApi(basetime);
    },
  },
  mounted() {
    this.setData();
  },
};
</script>

<style>
</style>