<template>
  <div class="item-view">
    <div class="item-title"><p>用户-用户管理</p></div>
    <el-row>
      <el-col :span="12">
        <el-form label-width="100px">
          <el-form-item label="用户昵称：">
            <el-input
              v-model="searchText"
              placeholder="请输入用户昵称"
              @keyup.enter.native="queryuserList"
            ></el-input>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6" :offset="6" align="center">
        <el-button type="primary" @click="setData()">查询</el-button>
      </el-col>
    </el-row>

    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="avatar" label="头像" width="80px">
        <template slot-scope="scope">
          <div class="avatar-wrapper">
            <img :src="scope.row.avatar" class="avatar-img" />
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="isadmin" label="权限"></el-table-column>
      <el-table-column prop="ctime" label="创建日期"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope" >
          <el-button type="primary" size="small" @click="editInfo(scope.row)"
            >编辑</el-button
          >
          <el-button
            type="danger"
            size="small"
            @click="manageComments(scope.row)"
            v-if="scope.row.isadmin !== '超级管理员'"
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
      title="编辑信息"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      :close-on-press-escape="false"
    >
      <Edit :userForm="userInfo" @call-index="setData" />
    </el-dialog>
  </div>
</template>

<script>
import Edit from "./edit.vue";
import userApis from "@/apis/userInfo";
import globalFunction from "@/apis/globalFunction";

export default {
  data() {
    return {
      userList: [],
      // 传输给编辑界面的用户信息
      userInfo: {
        id: "",
        nickname: "",
        card: "",
        avatar: "",
      },
      dialogVisible: false,
      searchText: "", // 添加的搜索框输入内容
      currentPage: 1, // 当前页码
      pageSize: 10, // 每页显示数量
      total: 0, // 总数据量
    };
  },
  components: { Edit },
  methods: {
    // 编辑博客的逻辑
    editInfo(item) {
      console.log(item);
      this.dialogVisible = true;
      this.userInfo.id = item.id;
      this.userInfo.nickname = item.nickname;
      this.userInfo.card = item.card;
      this.userInfo.avatar = item.avatar;
    },
    manageComments(blog) {
      // 处理评论管理的逻辑
      console.log(blog);
    },
    async setData() {
      this.dialogVisible = false;
      const data = await userApis.getAllUserApi(
        this.currentPage,
        this.searchText
      );
      console.log(data, "data");
      this.total = data[data.length - 1];
      data.pop();
      this.userList = data;
      console.log(this.userList, "userList");

      this.userList.forEach((item) => {
        item.ctime = this.formatTime(item.ctime);
        if (item.isadmin === 1) {
          item.isadmin = "管理员";
        } else if (item.isadmin === 2) {
          item.isadmin = "超级管理员";
        } else {
          item.isadmin = "普通用户";
        }
      });
    },
    // 日期格式化
    formatTime(basetime) {
      return globalFunction.formatTimeShortApi(basetime);
    },
    // 搜索框查询
    queryuserList() {
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