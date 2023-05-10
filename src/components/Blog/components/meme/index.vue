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
export default {
  components: { MyWaterfall, MemeInfo },
  data() {
    return {
      cardList: [
        {
          id: "1",
          imgSrc: "http://cdngoapl.twip.top/meme/meme1.png",
          vote_num: 999,
          title: "全新罚站队理解",
        },
        {
          id: "2",
          imgSrc: "http://cdngoapl.twip.top/meme/meme2.png",
          vote_num: 999,
          title: "1000石头能出吗",
        },
        {
          id: "3",
          imgSrc: "http://cdngoapl.twip.top/meme/meme3.png",
          vote_num: 999,
          title: "长按可以秒杀吗",
        },
        {
          id: "4",
          imgSrc: "http://cdngoapl.twip.top/meme/meme4.png",
          vote_num: 999,
          title: "长按可以秒杀吗",
        },
        {
          id: "5",
          imgSrc: "http://cdngoapl.twip.top/meme/meme5.png",
          vote_num: 999,
          title: "我全图",
        }
      ],
      tmpMemeData: {} 
    };
  },
  methods:{
    handleClick(val){
      console.log(val);
      this.tmpMemeData = val;
    }
  }
};
</script>
<style scoped>
.container {
  background-color: #f8f8f8;
  width: 75%;
}
</style>
