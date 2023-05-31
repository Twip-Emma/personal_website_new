<template>
  <div>
    <el-form ref="replyForm" :model="replyForm" label-width="80px">
      <el-form-item label="回复内容">
        <el-input
          type="textarea"
          v-model="replyForm.content"
          placeholder="请输入回复内容"
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
import globalFunction from "@/apis/globalFunction";
export default {
  props: {
    replyForm: {
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
      // 在此处可以初始化表单数据，如从后端获取博客信息并赋值给replyForm
      this.dialogVisible = true;
    },
    resetForm() {
      this.$refs.replyForm.resetFields();
    },
    async saveForm() {
      // 在此处可以提交表单数据，如将博客信息发送给后端进行保存
      this.dialogVisible = false;
      await globalFunction.updateMessage(this.replyForm);
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
