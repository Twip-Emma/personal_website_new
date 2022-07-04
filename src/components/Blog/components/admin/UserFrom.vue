<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 17:04:10
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-20 21:15:18
 * @Description: file content
-->
<template>
  <el-table :data="tableData" style="width: 100%" max-height="870">
    <el-table-column fixed prop="linkName" label="昵称" width="150"></el-table-column>
    <el-table-column prop="card" label="账号" width="120"></el-table-column>
    <el-table-column prop="pass" label="密码" width="120"></el-table-column>
    <el-table-column prop="createTime" label="创建时间" width="150"> </el-table-column>
    <el-table-column prop="passDes" label="加密规则" width="100"></el-table-column>
    <el-table-column fixed="right" label="操作" width="210">
      <template>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-warning"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
  },
  data() {
    return {
      tableData: [{
          linkName:"七画一只妖",
          card:"root",
          pass:"root",
          passDes:"null",
          createTime:"2021-11-20"
      },
      {
          linkName:"七画一只妖",
          card:"root",
          pass:"root",
          passDes:"null",
          createTime:"2021-11-20"
      },
      {
          linkName:"七画一只妖",
          card:"root",
          pass:"root",
          passDes:"null",
          createTime:"2021-11-20"
      },
      {
          linkName:"七画一只妖",
          card:"root",
          pass:"root",
          passDes:"null",
          createTime:"2021-11-20"
      }
      ],
    };
  },
};
</script>