<!--
 * @Author: 七画一只妖
 * @Date: 2022-07-28 22:03:26
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2024-01-19 16:24:36
 * @Description: file content
-->
<template>
  <div class="bigout">
    <div class="out">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="素材名称">
          <el-input v-model="meme.title"></el-input>
        </el-form-item>
        <el-form-item label="素材图片" class="image-uploader-container">
          <el-upload
            class="image-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :before-upload="handleBeforeUpload"
          >
            <!-- 预览图片区域 -->
            <img v-if="imageUrl" :src="imageUrl" class="image" />
            <!-- 选择图片按钮 -->
            <i v-else class="el-icon-plus image-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-button type="primary" @click="submit()">发 布</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import FileApis from "@/apis/file";
export default {
  data() {
    return {
      form: {
        time: "",
        resp: "",
        total: "",
      },
      meme: {
        title: "",
      },
      imageUrl: "", // 图片预览地址
      uploadUrl: "#", // 图片上传地址
    };
  },
  methods: {
    handleBeforeUpload(file) {
      // 使用FileReader预览图片
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(file);

      // 取消上传
      return false;
    },
    dataURLtoFile(dataURL, filename) {
      const arr = dataURL.split(",");
      const mime = arr[0].match(/:(.*?);/)[1];
      const bstr = atob(arr[1]);
      let n = bstr.length;
      const u8arr = new Uint8Array(n);
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, { type: mime });
    },
    // 确定发表
    async submit() {
      // 表单数据处理
      const formData = new FormData();
      if (this.imageUrl) {
        formData.append("file", this.dataURLtoFile(this.imageUrl, "meme.png"));
      }
      formData.append("title", this.meme.title);
      const res = await FileApis.uploadMeme(formData);
      console.log(res)
      if (res.success === true) {
        this.$message({
          title: "素材",
          message: "上传成功",
          type: "success",
        });
        this.meme.title = "";
        this.imageUrl = "";
      } else {
        this.$message({
          title: "素材",
          message: "上传失败",
          type: "error",
        });
        return;
      }
    },
  },
};
</script>

<style scoped>
.bigout {
  height: 800px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  display: flex;
}

.home {
  z-index: 0;
}

.image-uploader-container {
  width: 300px;
  height: 300px;
}

.image-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.image-uploader .el-upload:hover {
  border-color: #409eff;
}
.image-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 300px;
  line-height: 178px;
  text-align: center;
}
.image {
  width: 300px;
  height: 300px;
}
</style>