<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 17:04:10
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-26 20:26:37
 * @Description: file content
-->
<template>
  <el-table :data="tableData" style="width: 100%" border >
    <el-table-column align="center" fixed prop="nickname" label="昵称" width="200"></el-table-column>
    <el-table-column align="center" prop="card" label="账号" width="200"></el-table-column>
    <el-table-column align="center" prop="ctime" label="创建时间" width="200"> </el-table-column>
    <el-table-column align="center" label="操作">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="editUserInfo(scope.row.id)"></el-button>
        <el-button type="primary" icon="el-icon-warning"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import userApis from "@/apis/userInfo"
export default {
    data() {
    return {
      tableData: [],
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    editUserInfo(id){
      console.log(id)
    },
    async setUserData(){
      var resp = await userApis.getAllUserApi()
      if(resp.code === 200){
        this.tableData = resp.data
      }
    }
  },
  mounted(){
    this.setUserData()
  }
};
</script>

<style scoped>
</style>