<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 12:43:18
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-20 10:51:20
 * @Description: file content
-->
<template>
  <div class="out">
      <div class="item" v-for="(item,index) in skillList" :key="index">
        <div class="skill-item">{{item.skillName}}</div>
        <el-progress :color="item.color" class="item" :text-inside="true" :stroke-width="24" :percentage="item.percentage"></el-progress>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skillList:[
        {
          skillName:"HTML5+CSS+JSES4",
          percentage:50,
          color:"#D2691E"
        },
                {
          skillName:"JSES6",
          percentage:30,
          color:"#00BFFF"
        },
                {
          skillName:"Java",
          percentage:70,
          color:"#808000"
        },
                {
          skillName:"Python",
          percentage:60,
          color:"#008000"
        },
                {
          skillName:"SSM+SpringBoot",
          percentage:75,
          color:"#000000"
        },
                {
          skillName:"MyBatis+Mybatis-plus",
          percentage:70,
          color:"#228B22"
        },
                {
          skillName:"SpringCloud+主流中间件",
          percentage:60,
          color:"#FFA500"
        }
      ]
    };
  },
  methods: {
    increase() {
      this.percentage += 10;
      if (this.percentage > 100) {
        this.percentage = 100;
      }
    },
    decrease() {
      this.percentage -= 10;
      if (this.percentage < 0) {
        this.percentage = 0;
      }
    },
  },
};
</script>

<style scoped>
.item {
  width: 90%;
  display: flex;
  margin-top: 10px;
}

.skill-item {
  margin-top: 10px;
  width: 20%;
  text-align: center;
}
</style>