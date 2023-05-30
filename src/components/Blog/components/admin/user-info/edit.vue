<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-30 20:04:44
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-30 20:10:41
 * @FilePath: \personal_website\src\components\Blog\components\admin\user-info\edit.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-form label-width="80px">
      <el-form-item label="新的昵称">
        <el-input v-model="userForm.nickname"></el-input>
      </el-form-item>
      <el-form-item label="新的账号">
        <el-input v-model="userForm.card"></el-input>
      </el-form-item>
      <el-form-item label="新头像url">
        <el-input v-model="userForm.avatar"></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveForm">确定</el-button>
      <el-button @click="cancelForm">取消</el-button>
    </div>
  </div>
</template>

<script>
import userApis from "@/apis/userInfo";
export default {
  props: {
    userForm: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    showDialog() {
      // 在此处可以初始化表单数据，如从后端获取博客信息并赋值给userForm
      this.dialogVisible = true;
    },
    resetForm() {
      this.$refs.userForm.resetFields();
    },
    async saveForm() {
      // 在此处可以提交表单数据，如将博客信息发送给后端进行保存
      this.dialogVisible = false;
      await userApis.changeAllUserInfoApi(this.userForm);
      this.$nextTick(() => {
        this.$emit("call-index");
      });
      this.$message({
        message: "修改成功",
        type: "success",
      });
    },
    cancelForm() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$emit("call-index");
      });
    },
  },
};
</script>
