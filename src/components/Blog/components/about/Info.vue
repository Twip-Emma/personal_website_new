<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 13:35:03
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-22 22:58:31
 * @Description: file content
-->
<template>
  <div>
    <el-descriptions
      class="margin-top"
      title=""
      :column="3"
      :size="size"
      border
    >
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          用户名
        </template>
        七画一只妖
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          手机号
        </template>
        999999999999999
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-outline"></i>
          居住地
        </template>
        提瓦特大陆璃月国
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-tickets"></i>
          备注
        </template>
        <el-tag size="small">学校</el-tag>
      </el-descriptions-item>

      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          大学
        </template>
        湖南工程学院
      </el-descriptions-item>
      <!-- 其他 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-cpu"></i>
          专业
        </template>
        璃月港往生堂
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-dish"></i>
          QQ
        </template>
        璃月港往生堂
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-price-tag"></i>
          邮箱
        </template>
        璃月港往生堂
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-bank-card"></i>
          个人域名
        </template>
        璃月港往生堂
      </el-descriptions-item>
            <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-position"></i>
          GitHub
        </template>
        github.com/Twip-Emma
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: "mini",
    };
  },
};
</script>