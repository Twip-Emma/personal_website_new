<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 16:41:35
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-04 11:31:46
 * @Description: file content
-->
<template>
  <div class="out">
    <div class="a"><AdminMenu /></div>
    <div class="b"><router-view></router-view></div>
  </div>
</template>

<script>
import AdminMenu from "@/components/Blog/components/admin/AdminMenu";
export default {
  components: { AdminMenu },
  mounted(){
    console.log(document.querySelector('.b').offsetHeight,'1111s')
    this.$router.push({
      name: "AdminUserFrom",
      query: {},
    });
  }
};
</script>

<style scoped>
.out {
  border-color: red;
  display: flex;
  justify-content: center;
  height: 100%;
}

.a{
  height: 100%;
    width: 25%;
}

.b{
    width: 75%;
}
</style>