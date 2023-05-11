<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-09 16:59:45
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-11 13:27:35
 * @FilePath: \personal_website\src\components\Blog\components\meme\memeInfo.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="description-viewer">
    <div class="content">
      <div class="title">HI,欢迎来到万象梗|笑话|发电记录</div>
      <div class="message">
        万象圈的日常，目前已有{{ total }}组，数据持续更新中
      </div>
      <div class="footer">
        <a target="_blank" href="https://space.bilibili.com/178547325">感兴趣可以投稿哦</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initdata: {
      type: Array,
      default: () => {},
    },
  },
  computed: {
    total() {
      return this.initdata.length;
    },
  },
};
</script>

<style scoped>
.description-viewer {
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  margin: 10px 5px 10px;
  padding: 10px;
  box-shadow: 0 0 5px 1px #999;
}

.content {
  margin: 50px 50px 50px 50px;
}

.title {
  font-size: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  /* color: #999; */
}
.message {
  margin-top: 100px;
  margin-bottom: 20px;
  color: #999;
}
.footer {
  display: inline-block;
  margin-left: 5px;
  color: rgb(0, 153, 255);
  cursor: pointer;
}
</style>
