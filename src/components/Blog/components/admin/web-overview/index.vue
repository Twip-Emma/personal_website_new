<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2024-03-31 13:27:50
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2024-03-31 14:08:21
 * @FilePath: \personal_website\src\components\Blog\components\admin\web-overview\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <div>测试</div>
    <!-- 饼图容器 -->
    <div class="pie-chart" ref="pieChart"></div>

    <!-- 表格展示 -->
    <!-- <el-table :data="tableData" border>
      <el-table-column prop="type" label="类型" width="180"></el-table-column>
      <el-table-column prop="count" label="数量" width="180"></el-table-column>
    </el-table> -->
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      tableData: [
        { type: "用户数", count: this.userCount },
        { type: "文章数", count: this.blogCount },
        { type: "表情包数", count: this.memeCount },
        { type: "GET请求数", count: this.getRequestCount },
        { type: "POST请求数", count: this.postRequestCount },
      ],
      blogTypeData: [], // 博客类型分布数据
      pieChartInstance: null,
    };
  },
  computed: {},
  mounted() {},
  methods: {
    async renderPieChart() {
      const pieChart = echarts.init(this.$refs.pieChart);

      const data = [
        { name: "日常生活", value: 123 },
        { name: "知识分享", value: 223 },
        { name: "学习笔记", value: 341 },
        { name: "项目开发", value: 78 },
      ];
      const option = {
        title: {
          text: "博客类型分布",
          x: "center",
        },
        series: [
          {
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      pieChart.setOption(option);
    },
  },
};
</script>

<style scoped>
.management {
  display: flex;
}

.blog-stats {
  text-align: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.pie-chart {
  height: 300px;
}
</style>