<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 14:06:59
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-04-13 11:04:15
 * @Description: file content
-->


<template>
<el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<script>
  export default {
    data() {
      return {

        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    computed:{
      treeData(){
        return this.$store.state.globalData.treeData
      }
    },
    methods: {
      handleNodeClick(data) {
        if(data.url){
            window.open(data.url)
        }
      }
    }
  };
</script>