<template>
  <div>
    <el-form ref="blogForm" :model="blogForm" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="blogForm.title" placeholder="请输入标题"></el-input>
      </el-form-item>

      <el-form-item label="博客类型">
        <el-select v-model="blogForm.flag" placeholder="请选择博客类型">
          <el-option label="项目开发" value="项目开发"></el-option>
          <el-option label="知识分享" value="知识分享"></el-option>
          <el-option label="日常生活" value="日常生活"></el-option>
          <el-option label="学习笔记" value="学习笔记"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="博客描述">
        <el-input
          type="textarea"
          v-model="blogForm.description"
          placeholder="请输入博客描述"
        ></el-input>
      </el-form-item>
    </el-form>

    <div slot="footer" class="dialog-footer">
      <el-button type="primary" @click="saveForm">确定</el-button>
      <el-button @click="cancelForm">取消</el-button>
    </div>
  </div>
</template>

<script>
import blogApis from "@/apis/blogInfo";
export default {
  props: {
    blogForm: {
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
      // 在此处可以初始化表单数据，如从后端获取博客信息并赋值给blogForm
      this.dialogVisible = true;
    },
    resetForm() {
      this.$refs.blogForm.resetFields();
    },
    async saveForm() {
      // 在此处可以提交表单数据，如将博客信息发送给后端进行保存
      this.dialogVisible = false;
      await blogApis.updateBlogByUser(this.blogForm);
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
