<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-20 14:06:59
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-29 10:37:48
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
        console.log(data);
        if(data.url){
            window.open(data.url)
        }
      }
    }
  };
</script>