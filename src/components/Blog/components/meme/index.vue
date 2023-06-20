<!--
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-09 09:34:42
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-25 16:35:47
 * @FilePath: \personal_website\src\components\Blog\components\meme\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="container">
    <div>
      <MemeDescription :initdata="cardList" />
    </div>
    <div class="button">
      <el-button @click="randomDisplay()">乱序</el-button>
      <el-button @click="orderDisplay()">顺序</el-button>
    </div>
    <el-dialog
      title="语录详情"
      :visible.sync="dialogVisible"
      :modal-append-to-body="false"
    >
      <MemeInfo :data="tmpMemeData" />
    </el-dialog>
    <div class="waterfall">
      <MyWaterfall @handleClick="handleClick" ref="MyWaterfall" />
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
      // memeInfo弹窗状态
      dialogVisible: false,
      flag: 0,
    };
  },
  methods: {
    handleClick(val) {
      this.tmpMemeData = val;
      this.dialogVisible = true;
    },
    async setInitData() {
      this.cardList = await MemeApis.query();
      this.randomCardList = Array.from(this.cardList); // 深拷贝
      this.randomCardList.sort(() => {
        return 0.5 - Math.random();
      });
      if (this.flag === 0) {
        this.$nextTick(() => {
          this.$refs.MyWaterfall.setCardList(this.randomCardList);
        });
        this.flag = 1
      }
    },
    // 乱序展示
    async randomDisplay() {
      this.$nextTick(() => {
        this.$refs.MyWaterfall.setCardList(this.randomCardList);
      });
    },
    // 顺序展示
    async orderDisplay() {
      this.$refs.MyWaterfall.setCardList([]);
      this.$nextTick(() => {
        this.$refs.MyWaterfall.setCardList(this.cardList);
      });
    },
  },
  mounted() {
    this.setInitData();
  },
};
</script>
<style scoped>
.container {
  background-color: #f8f8f8;
  width: 75%;
}

.button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
