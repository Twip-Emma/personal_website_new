<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-09 09:34:42
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-10 17:16:10
 * @FilePath: \personal_website\src\components\Blog\components\meme\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
      <div>
        <MemeInfo :data="tmpMemeData"/>
      </div>
      <div class="waterfall">
        <MyWaterfall :data="cardList" @handleClick="handleClick"/>
      </div>
   </div>
</template>
<script>
import MyWaterfall from "./myWaterfall.vue";
import MemeInfo from "./memeInfo.vue"
import MemeApis from "@/apis/meme"
export default {
  components: { MyWaterfall, MemeInfo },
  data() {
    return {
      // meme列表
      cardList: [],
      tmpMemeData: {} 
    };
  },
  methods:{
    handleClick(val){
      console.log(val);
      this.tmpMemeData = val;
    },
    async setData(){
      this.cardList = await MemeApis.query()
      console.log(this.cardList, "cardList")
    }
  },
  mounted() {
    this.setData()
  }
};
</script>
<style scoped>
.container {
  background-color: #f8f8f8;
  width: 75%;
}
</style>
