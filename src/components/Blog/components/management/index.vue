<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-24 21:49:01
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-25 14:40:55
 * @FilePath: \personal_website\src\components\Blog\components\management\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="management">
    <div class="left-section">
      <div class="personal-info">
        <User />
      </div>
      <div class="blog-stats">
        <h2>博客统计</h2>
        <p>发表的博客数量: {{ blogCount }}</p>
        <p>博客总浏览量: {{ totalViews }}</p>
        <div class="pie-chart" ref="pieChart"></div>
      </div>
    </div>
    <div class="right-section">
      <BlogList />
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import User from "./user.vue";
import BlogList from "./blog-list.vue"

import blogApis from "@/apis/blogInfo"

export default {
  components: { User,BlogList },
  data() {
    return {
      blogCount: 0,
      totalViews: 0,
    };
  },
  mounted() {
    this.renderPieChart();
  },
  methods: {
    async renderPieChart() {
      const pieChart = echarts.init(this.$refs.pieChart);

      const pieData = await blogApis.getBlogCountData()
      this.blogCount = pieData.total_blogs
      this.totalViews = pieData.total_views
      console.log(pieData)

      const data = [
        { name: "日常生活", value: pieData.daily_count },
        { name: "知识分享", value: pieData.knowledge_count },
        { name: "学习笔记", value: pieData.study_count },
        { name: "项目开发", value: pieData.project_count },
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

.left-section {
  /* border: 1px solid red; */
  flex: 1;
  padding: 20px;
}

.right-section {
  /* border: 1px solid red; */
  flex: 1;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  margin-top: 20px;
}

.personal-info {
  margin-bottom: 20px;
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
