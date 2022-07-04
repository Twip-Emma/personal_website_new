<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 13:50:08
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-29 11:14:33
 * @Description: file content
-->
<template>
  <el-collapse v-model="activeName" accordion>
    <el-collapse-item
      :title="item.title"
      v-for="(item, index) in collectList"
      :key="index"
    >
      <a :href="item.url"> 点此跳转 </a>
      <div>
        {{ item.context }}
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
export default {
  data() {
    return {
      collectList: [
        {
          title: "藏品1",
          context: "百度：一个搜索好帮手",
          url: "https://www.baidu.com/",
        },
        {
          title: "藏品1",
          context: "百度：一个搜索好帮手",
          url: "https://www.baidu.com/",
        },
      ],
    };
  },
};
</script>

<style>
</style>