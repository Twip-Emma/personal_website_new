<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 16:41:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 10:43:43
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
};
</script>

<style scoped>
.out {
  border-color: red;
  display: flex;
  justify-content: center;
}

.a{
    width: 20%;
}

.b{
    width: 80%;
}
</style>