<!--
 * @Author: 七画一只妖
 * @Date: 2022-07-28 22:03:26
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-08-23 11:29:20
 * @Description: file content
-->
<template>
  <div class="bigout">
    <div class="out">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="使用次数">
          <el-input v-model="form.time"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('yes')">立即获取</el-button>
          <el-button @click="onSubmit('no')">清空次数</el-button>
        </el-form-item>
        <el-form-item label="返回KEY" label-width="400px">
          <el-input v-model="form.resp"></el-input>
        </el-form-item>
        <el-form-item label="全链接">
          <el-input v-model="form.total"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import KeyApis from '@/apis/keyinfo'
export default {
  data() {
    return {
      form: {
        time: "这里输入使用次数，不输入的话默认5次",
        resp: "",
        total: "",
      },
    };
  },
  methods: {
    async onSubmit(x) {
        if(x === "yes"){
            var data = await KeyApis.getNewKeyApi(this.form.time)
            if(data.code === 200){
                this.$notify({
                    title: '管理员',
                    message: '获取成功，已自动显示，查收前不要刷新本页面',
                    type: 'success'
                });
                // 刷新本页面
                this.form.resp = data.data
                this.form.total = "http://twip.top/api/higanbana/api/setu?key=" + data.data
            }else{
                this.$notify({
                    title: '异常',
                    message: '获取失败，与服务器通信出现了异常',
                    type: 'warning'
                });
            }
        }else{
            this.form.resp = ""
            this.form.total = ""
            this.form.time = null
        }
    },
  },
};
</script>

<style scoped>
.bigout {
  height: 800px;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  display: flex;
}
</style>