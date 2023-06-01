<template>
  <div class="item-view">
    <div class="item-title"><p>评论-博客评论管理</p></div>
    <el-row>
      <el-col :span="12">
        <el-form label-width="100px">
          <el-form-item label="博客标题：">
            <el-input
              v-model="searchText"
              placeholder="请输入标题"
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
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="user.nickname" label="作者"></el-table-column>
      <el-table-column prop="views" label="浏览" width="50px"></el-table-column>
      <el-table-column prop="ctime" label="创建日期"></el-table-column>
      <el-table-column prop="mtime" label="编辑日期"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small" @click="editBlog(scope.row)"
            >查看评论</el-button
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
    >
      <ReplyList :blogId="initBlogData.id" @call-index="setData" />
    </el-dialog>
  </div>
</template>

<script>
import ReplyList from "./reply-list.vue";
import blogApis from "@/apis/blogInfo";
import globalFunction from "@/apis/globalFunction";

export default {
  data() {
    return {
      blogList: [],
      initBlogData: {
        id: "",
      },
      dialogVisible: false,
      searchText: "", // 添加的搜索框输入内容
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示数量
      total: 0, // 总数据量
    };
  },
  components: { ReplyList },
  methods: {
    // 编辑博客的逻辑
    editBlog(blog) {
      this.dialogVisible = true;
      this.initBlogData.id = blog.id;
    },
    async setData() {
      this.dialogVisible = false;
      const data = await blogApis.queryAllBlog(
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