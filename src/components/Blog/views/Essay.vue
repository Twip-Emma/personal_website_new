<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 16:50:58
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-29 10:14:26
 * @Description: file content
-->
<template>
  <el-container>
    <el-timeline>
      <el-timeline-item
        :color="essay.borderColor"
        v-for="essay in essayList"
        :key="essay.id"
        :timestamp="essay.createTime"
        placement="top"
      >
        <el-card>
          <h2 v-if="essay.title">{{ essay.title }}</h2>
          <div class="typo" v-html="essay.content"></div>
          <el-image v-if="essay.image" :src="essay.image"></el-image>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-container>
</template>

<script>
export default {
  name: "Essay",
  data() {
    return {
    };
  },
  computed:{
    essayList(){
      return this.$store.state.globalData.essayList
    }
  },
  created() {
    // this.getEssayList();
  },
  methods: {
    // async getEssayList() {
    //     this.essayList = this.essayListTest.sort();
    // }
  },
  mounted() {},
};
</script>

<style scoped>
.el-image {
  width: 200px;
}
.el-card {
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.el-timeline {
  font: 16px/1.5 "Microsoft Yahei", "PingFang SC", "Hiragino Sans GB",
    sans-serif !important;

  width: 80%;
  margin: 0 auto;
}

@media screen and (max-width: 768px) {
  .el-timeline {
    width: 98%;
    padding: 2px;
  }

  .el-timeline /deep/ .el-timeline-item__wrapper {
    padding-left: 15px !important;
  }
}
</style>