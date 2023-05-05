<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 17:04:10
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-05 16:20:09
 * @Description: file content
-->
<template>
  <div>
    <el-table :data="tableData" style="width: 100%" border>
      <el-table-column
        align="center"
        fixed
        prop="nickname"
        label="昵称"
        width="200"
      ></el-table-column>
      <el-table-column
        align="center"
        prop="card"
        label="账号"
        width="200"
      ></el-table-column>
      <el-table-column align="center" prop="ctime" label="创建时间" width="200">
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button
            type="text"
            icon="el-icon-edit"
            @click="updateButton(scope.row.id)"
            >编辑</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <!-- 分页 -->
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :page-size="10"
        :current-page="1"
        :total="totalCount"
      >
      </el-pagination>
    </div>
    <!-- 弹窗修改信息 -->
    <el-dialog title="修改个人信息" :visible.sync="dialogVisible" width="30%">
      <el-form label-width="80px">
        <el-form-item label="新的昵称">
          <el-input v-model="userInfo.nickname"></el-input>
        </el-form-item>
        <el-form-item label="新的账号">
          <el-input v-model="userInfo.card"></el-input>
        </el-form-item>
        <el-form-item label="新头像url">
          <el-input v-model="userInfo.avatar"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="updateUserInfo('no')">取 消</el-button>
        <el-button type="primary" @click="updateUserInfo('yes')"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import userApis from "@/apis/userInfo";
import globalFunction from "@/apis/globalFunction";
export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [],
      userInfo: {
        id: "",
        nickname: "",
        card: "",
        avatar: "",
      },
      // 页数量
      currentPage3: 1,
      // 当前页面
      page: 1,
      // 总条数
      totalCount: 0,
    };
  },
  methods: {
    // 设置总页数
    async setTotalCount() {
      this.totalCount = await userApis.getUserCount();
    },
    // 翻页时修改变量page
    handleCurrentChange(val) {
      this.page = val;
      this.setUserData();
    },
    // 初始化用户列表
    async setUserData() {
      // 先更新总条数
      this.setTotalCount();

      this.tableData = [];
      var data = await userApis.getAllUserApi(this.page);
      data.forEach((item) => {
        item.ctime = globalFunction.formatTimeApi(item.ctime);
        this.tableData.push(item);
      });
    },
    // 按下修改信息的按钮了
    updateButton(id) {
      this.tableData.forEach((item) => {
        if (item.id === id) {
          this.userInfo.id = item.id;
          this.userInfo.nickname = item.nickname;
          this.userInfo.card = item.card;
          this.userInfo.avatar = item.avatar;
          this.dialogVisible = true;
        }
      });
      console.log(this.userInfo, "点击的用户信息");
    },
    // 修改用户信息
    async updateUserInfo(x) {
      if (x === "yes") {
        userApis.changeAllUserInfoApi(this.userInfo);
        this.$notify({
          title: "管理员",
          message: "修改成功，已刷新本页面",
          type: "success",
        });
        // 刷新本页面
        this.setUserData();
        this.dialogVisible = false;
      } else {
        this.dialogVisible = false;
      }
    },
    // 删除一个用户
    async deleteButton(id) {
      var data = await userApis.deleteUser(id);
      if (data.code === 200) {
        this.$notify({
          title: "管理员",
          message: "删除成功，已刷新本页面",
          type: "success",
        });
        // 刷新本页面
        this.setUserData();
      } else if (data.code === 1204) {
        this.$notify({
          title: "管理员",
          message: "删除失败，可能该数据已经被删除了",
          type: "warning",
        });
      } else {
        this.$notify({
          title: "异常",
          message: "删除失败，与服务器通信出现了异常",
          type: "warning",
        });
      }
    },
  },
  mounted() {
    this.setUserData();
  },
};
</script>

<style scoped>
.block {
  float: right;
}
</style>