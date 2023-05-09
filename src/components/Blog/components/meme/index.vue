<template>
  <div class="container">
      <div>
        <memeInfo></memeInfo>
      </div>
      <div class="waterfall">
        <my-waterfall :data="cardList"></my-waterfall>
      </div>
   </div>
</template>
<script>
import myWaterfall from "./myWaterfall.vue";
import memeInfo from "./memeInfo.vue"
export default {
  components: { myWaterfall, memeInfo },
  data() {
    return {
      cardList: [
        {
          imgSrc: "http://cdngoapl.twip.top/meme/meme1.png",
          vote_num: 999,
          title: "全新罚站队理解",
        },
        {
          imgSrc: "http://cdngoapl.twip.top/meme/meme2.png",
          vote_num: 999,
          title: "1000石头能出吗",
        },
        {
          imgSrc: "http://cdngoapl.twip.top/meme/meme3.png",
          vote_num: 999,
          title: "长按可以秒杀吗",
        },
        {
          imgSrc: "http://cdngoapl.twip.top/meme/meme4.png",
          vote_num: 999,
          title: "长按可以秒杀吗",
        },
        {
          imgSrc: "http://cdngoapl.twip.top/meme/meme5.png",
          vote_num: 999,
          title: "我全图",
        }
      ],
    };
  },
};
</script>
<style scoped>
.container {
  background-color: #f8f8f8;
  width: 75%;
}
</style>
