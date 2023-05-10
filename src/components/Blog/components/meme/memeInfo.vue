<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-09 16:59:45
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-10 17:27:20
 * @FilePath: \personal_website\src\components\Blog\components\meme\memeInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="image-viewer" v-if="data.id">
    <h3 class="image-title">{{ data.title }}</h3>
    <div class="image-container">
      <img :src="data.imgUrl" alt="图片" />
    </div>
    <el-dialog title="评论" :visible.sync="outerVisible">
      <Reply />
    </el-dialog>
    <div slot="footer" class="dialog-footer">
      <el-button @click="outerVisible = false" :disabled="true">点赞</el-button>
      <el-button type="primary" @click="outerVisible = true" :disabled="true">评论</el-button>
    </div>
  </div>
</template>

<script>
import Reply from "./reply.vue";
export default {
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // 弹窗
      outerVisible: false,
      innerVisible: false,
    };
  },
  components: {
    Reply,
  },
  methods: {
  },
};
</script>

<style scoped>
.image-viewer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  margin: 10px 5px 10px;
  padding: 10px;
  box-shadow: 0 0 5px 1px #999;
}

.image-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

.image-container {
  width: 75%;
  max-width: 1000px;
  margin-top: 20px;
  margin-bottom: 20px;
  max-height: 500px; /* 假设容器最大高度为 500px */
  overflow-y: auto; /* 添加垂直滚动条 */
  box-shadow: 0 0 5px 1px #d7d7d7;
}

.image-container img {
  max-width: 100%;
  margin-bottom: 20px;
  max-height: 100%;
  display: block; /* 清除默认的 inline-block 样式 */
  margin: auto; /* 水平和垂直居中 */
}

.comment-section {
  margin-top: 20px;
  width: 75%;
  max-width: 400px;
}

.comment-section h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.comment-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.comment-list li {
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
