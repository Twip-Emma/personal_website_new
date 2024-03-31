<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-04-11 14:27:30
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-07-18 16:55:10
 * @FilePath: \personal_website\src\components\Blog\views\BlogEdit.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 编辑博客内容的div -->
    <div class="home">
      <mavon-editor
        :codeStyle="codeStyle"
        :toolbars="toolbars"
        v-model="content"
        :ishljs="true"
        ref="md"
        @change="change"
      />
      <el-button @click="clickOk()">确定</el-button>
    </div>
    <!-- 填写基本信息的弹窗 -->
    <el-dialog title="发表博客-填写基本信息" :visible.sync="dialogFormVisible">
      <el-form :model="blogForm" :rules="rules" ref="blogForm">
        <el-form-item
          prop="title"
          label="博客标题"
          :label-width="formLabelWidth"
        >
          <el-input
            v-model="blogForm.title"
            autocomplete="off"
            placeholder="请输入博客标题"
          ></el-input>
        </el-form-item>
        <el-form-item
          prop="flag"
          label="博客类型"
          :label-width="formLabelWidth"
        >
          <el-select v-model="blogForm.flag" placeholder="请选择博客类型">
            <el-option label="项目开发" value="项目开发"></el-option>
            <el-option label="知识分享" value="知识分享"></el-option>
            <el-option label="日常生活" value="日常生活"></el-option>
            <el-option label="学习笔记" value="学习笔记"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item prop="content" label="博客描述">
          <el-input
            :rows="5"
            v-model="blogForm.description"
            type="textarea"
            placeholder="请输入博客的描述"
          ></el-input>
        </el-form-item>
        <el-form-item label="博客插图" class="image-uploader-container">
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
        <el-form-item label="博客标签">
          <Tags />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">发 布</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Tags from "@/components/Blog/components/blogedit/Tags";
import BlogApis from "@/apis/blogInfo";
// import fileApi from "@/apis/file";

export default {
  components: { Tags },
  data() {
    return {
      imageUrl: "", // 图片预览地址
      uploadUrl: "#", // 图片上传地址
      content: "",
      page_article: undefined,
      html_content: undefined,
      md_content: undefined,
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        help: true, // 帮助
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        navigation: true, // 导航目录
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        subfield: true, // 单双栏模式
        preview: true, // 预览
      },
      codeStyle: "monokai-sublime", //主题
      test_html: undefined,
      dialogFormVisible: false,
      formLabelWidth: "120px",
      // 博客提交表单
      blogForm: {
        title: "",
        content: "",
        firstPicture:
          "http://cdngoapl.twip.top/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/blogpicA.png",
        flag: "",
        description: "",
        typeName: "暂时不知道这个参数是干嘛的",
        tags: "",
      },
      // 表单校验规则
      rules: {
        title: [
          { required: true, message: "请输入博客标题", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        flag: [{ required: true, message: "请输入博客标题", trigger: "blur" }],
      },
    };
  },
  methods: {
    // 校验文件是否是图片
    handleBeforeUpload(file) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ]; // 允许的图片MIME类型
      if (!allowedTypes.includes(file.type)) {
        this.$message.error("只能上传 JPG、PNG、GIF 或 WEBP 格式的图片！");
        return false;
      }

      // 更进一步的安全性检查，尝试读取文件头部数据并创建图片
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onerror = () => {
          this.$message.error("上传的文件不是一个有效的图片格式！");
          return false;
        };
        img.onload = () => {
          // 图片加载成功，可认为是有效图片,使用FileReader预览图片
          const reader = new FileReader();
          reader.onload = (e) => {
            this.imageUrl = e.target.result;
          };
          reader.readAsDataURL(file);
        };
        img.src = event.target.result; // 设置图片源为读取到的文件数据
      };

      // 读取文件前几个字节作为验证依据（不同格式图片的前几个字节代表不同的标识符）
      reader.readAsDataURL(file.slice(0, 1024 * 4)); // 只读取前4KB的数据作为校验，减少内存消耗

      // 返回false暂停默认的上传行为，直到校验完成
      return false;
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.test_html = render;
    },
    // 点击确定然后弹窗
    clickOk() {
      this.dialogFormVisible = true;
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
    submit() {
      this.$refs.blogForm.validate(async (valid) => {
        if (valid) {
          // 表单数据处理
          const formData = new FormData();
          this.blogForm.content = this.test_html;
          let arrTags = this.$store.state.globalData.blogTags;
          this.blogForm.tags = arrTags.join("|");
          this.blogForm.typeName = this.blogForm.flag;

          if (this.imageUrl) {
            formData.append(
              "file",
              this.dataURLtoFile(this.imageUrl, "avatar.png")
            );
          }
          const blob = new Blob([JSON.stringify(this.blogForm)], {
            type: "application/json",
          });
          formData.append("blog", blob);
          const res = await BlogApis.publishBlog(formData);
          if (res.code === 200) {
            this.$message({
              title: "博客",
              message: res,
              type: "success",
            });
            this.dialogFormVisible = false;
            this.$router.push({
              name: "HomePage",
              query: {},
            });
          } else {
            this.$message({
              title: "修改",
              message: res.msg,
              type: "error",
            });
            return;
          }
        } else {
          // 表单验证未通过，给出提示
          this.$message({
            message: "请填正确填写表单",
            type: "warning",
          });
        }
      });
      // this.dialogFormVisible = true
    },
  },
};
</script>

<style scoped>
.home {
  z-index: 0;
}

.image-uploader-container {
  width: 300px;
  height: 200px;
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
  height: 150px;
  line-height: 178px;
  text-align: center;
}
.image {
  width: 300px;
  height: 150px;
}
</style>