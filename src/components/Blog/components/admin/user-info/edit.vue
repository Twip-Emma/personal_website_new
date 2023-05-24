<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="新的昵称">
        <el-input v-model="userData.nickname"></el-input>
      </el-form-item>
      <el-form-item label="新的账号">
        <el-input v-model="userData.card"></el-input>
      </el-form-item>
      <el-form-item label="新头像url">
        <el-input v-model="userData.avatar"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="updateUserInfo('no')">取 消</el-button>
      <el-button type="primary" @click="updateUserInfo('yes')">确 定</el-button>
    </span>
  </div>
</template>

<script>
import userApis from "@/apis/userInfo";
export default {
  data() {
    return {};
  },
  props: {
    userData: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    // 修改用户信息
    async updateUserInfo(x) {
      if (x === "yes") {
        userApis.changeAllUserInfoApi(this.userData);
        this.$message({
          title: "管理员",
          message: "修改成功，已刷新本页面",
          type: "success",
        });
        // 刷新本页面
        // this.setUserData();
      }
      this.$nextTick(() => {
        this.$emit("call-index");
      });
    },
  },
};
</script>

<style>
</style>