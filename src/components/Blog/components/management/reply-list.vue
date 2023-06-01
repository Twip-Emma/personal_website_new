<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-24 21:48:13
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-06-01 19:43:39
 * @FilePath: \personal_website\src\components\Blog\components\admin\reply-web\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="item-view">
    <div class="item-title"><p>评论-网站评论管理</p></div>
    <el-row>
      <el-col :span="12">
        <el-form label-width="100px">
          <el-form-item label="回复内容：">
            <el-input
              v-model="searchText"
              placeholder="请输入回复内容"
              @keyup.enter.native="queryBlogList"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" :offset="6" align="center">
        <el-button type="primary" @click="setData()">查询</el-button>
      </el-col>
    </el-row>

    <el-table :data="blogList" style="width: 100%">
      <el-table-column prop="avatar" label="头像" width="80px">
        <template slot-scope="scope">
          <div class="avatar-wrapper">
            <img :src="scope.row.avatar" class="avatar-img" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column label="内容">
        <template slot-scope="scope">
          <div class="text-ellipsis">{{ scope.row.content }}</div>
        </template>
      </el-table-column>
      <el-table-column prop="ctime" label="创建日期"></el-table-column>
      <el-table-column prop="mtime" label="编辑日期"></el-table-column>
      <el-table-column label="操作" width="150px">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="small"
            @click="editBlog(scope.row)"
            v-if="userId === scope.row.userId"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="deleteMessage(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
      background
      @current-change="handlePageChange"
      :page-size="10"
      :current-page="1"
      :total="total"
    >
    </el-pagination>

    <el-dialog
      title="编辑博客"
      :visible.sync="dialogVisible"
      :close-on-press-escape="false"
      append-to-body
    >
      <ReplyEdit :replyForm="initReplyData" @call-index="setData" />
    </el-dialog>
  </div>
</template>

<script>
import ReplyEdit from "./reply-edit.vue";
import blogApis from "@/apis/blogInfo";
import globalFunction from "@/apis/globalFunction";

export default {
  data() {
    return {
      blogList: [],
      initReplyData: {
        id: "",
        content: "",
      },
      dialogVisible: false,
      searchText: "", // 添加的搜索框输入内容
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示数量
      total: 0, // 总数据量
    };
  },
  watch: {
    blogId: function () {
      this.setData();
    },
  },
  props: {
    blogId: {
      type: String,
      default: "",
    },
  },
  computed: {
    userId() {
      return localStorage.getItem("userId");
    },
  },
  components: { ReplyEdit },
  methods: {
    // 编辑博客的逻辑
    editBlog(blog) {
      console.log(blog);
      this.dialogVisible = true;
      this.initReplyData.id = blog.id;
      this.initReplyData.content = blog.content;
    },
    // 处理评论删除的逻辑
    deleteMessage(reply) {
      console.log(reply.id, "reply.id");
      this.$confirm(`此操作将删除这条内容, 是否继续?`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(async () => {
          await blogApis.deleteBlogReplyByAdmin(reply.id);
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
      const data = await blogApis.getBlogReplyById(
        this.blogId,
        this.currentPage,
        this.searchText
      );
      this.total = data[data.length - 1];
      data.pop();
      this.blogList = data;

      this.blogList.forEach((item) => {
        item.ctime = this.formatTime(item.ctime);
        item.mtime = this.formatTime(item.mtime);
      });
    },
    // 日期格式化
    formatTime(basetime) {
      return globalFunction.formatTimeShortApi(basetime);
    },
    // 搜索框查询
    queryBlogList() {
      this.currentPage = 1;
      this.setData();
    },
    // 分页变化
    handlePageChange(currentPage) {
      this.currentPage = currentPage;
      this.setData();
    },
  },
  mounted() {
    this.setData();
  },
};
</script>

<style scoped>
.avatar-wrapper {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 200px; /* 根据你的需求设置合适的最大宽度 */
}

.item-view {
  padding: 20px;
}
.item-title {
  padding-top: 20px;
  padding-bottom: 10px;
}

.item-title p {
  font-weight: bold;
  font-size: 30px;
}
</style>