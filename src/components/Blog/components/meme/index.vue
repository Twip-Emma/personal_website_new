<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-09 09:34:42
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-11 13:25:55
 * @FilePath: \personal_website\src\components\Blog\components\meme\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <div>
      <MemeDescription :initdata="cardList" />
    </div>
    <div id="info">
      <MemeInfo :data="tmpMemeData" />
    </div>
    <div class="waterfall">
      <MyWaterfall :initdata="cardList" @handleClick="handleClick" />
    </div>
  </div>
</template>
<script>
import MyWaterfall from "./myWaterfall.vue";
import MemeInfo from "./memeInfo.vue";
import MemeApis from "@/apis/meme";
import MemeDescription from "./memeDescription.vue";
export default {
  components: { MyWaterfall, MemeInfo, MemeDescription },
  data() {
    return {
      // meme列表
      cardList: [],
      tmpMemeData: {},
    };
  },
  methods: {
    handleClick(val) {
      console.log(val);
      this.tmpMemeData = val;
      location.href = "#info"
    },
    async setData() {
      this.cardList = await MemeApis.query();
      this.cardList.sort(() => {
        return 0.5 - Math.random();
      });
    },
  },
  mounted() {
    this.setData();
  },
};
</script>
<style scoped>
.container {
  background-color: #f8f8f8;
  width: 75%;
}
</style>
