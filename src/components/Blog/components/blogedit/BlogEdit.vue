<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-04-11 14:27:30
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-04-13 11:04:24
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
        <el-form-item prop="title" label="博客标题" :label-width="formLabelWidth">
          <el-input v-model="blogForm.title" autocomplete="off" placeholder="请输入博客标题"></el-input>
        </el-form-item>
        <el-form-item prop="flag" label="博客类型" :label-width="formLabelWidth">
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
        <el-form-item label="博客标签">
          <Tags/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()"
          >发 布</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Tags from '@/components/Blog/components/blogedit/Tags'
import BlogApis from '@/apis/blogInfo'
export default {
  components: { Tags },
  data() {
    return {
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
      formLabelWidth: '120px',
      // 博客提交表单
      blogForm: {
        title:"",
        content:"",
        firstPicture:"http://cdngoapl.twip.top/%E4%B8%AA%E4%BA%BA%E7%BD%91%E7%AB%99%E5%9B%BE%E7%89%87%E8%B5%84%E6%BA%90/blogpicA.png",
        flag:"",
        description:"",
        typeName:"暂时不知道这个参数是干嘛的",
        tags:""
      },
      // 表单校验规则
      rules: {
        title: [
            { required: true, message: '请输入博客标题', trigger: 'blur' },
            { min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur' }
        ],
        flag: [{ required: true, message: '请输入博客标题', trigger: 'blur' }]
      }
    };
  },
  methods: {
    change(value, render) {
      // render 为 markdown 解析后的结果
      this.test_html = render;
    },
    // 点击确定然后弹窗
    clickOk(){
      this.dialogFormVisible = true
      this.$refs.blogForm.resetFields();
    },
    // 确定发表
     submit() {
        this.$refs.blogForm.validate(async valid => {
          if(valid) {
            this.blogForm.content = this.test_html
            let arrTags = this.$store.state.globalData.blogTags
            this.blogForm.tags = arrTags.join("|")
            await BlogApis.publishBlog(this.blogForm)
            this.$notify({
              title: "博客",
              message: "发表博客成功",
              type: "success",
            });
            this.dialogFormVisible = false
            this.$router.push({
              name: "HomePage",
              query: {},
            });
          } else {
            // 表单验证未通过，给出提示
            this.$message({
              message: '请填正确填写表单',
              type: 'warning'
            });
          }
        })
        // this.dialogFormVisible = true
    },
  },
};
</script>

<style scoped>
.home {
  z-index: 0;
}
</style>