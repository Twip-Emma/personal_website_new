<template>
  <div class="out">
    <waterfall :col="col" :data="visibleData" :gutterWidth="0">
      <template>
        <div
          class="cell-item"
          v-for="item in visibleData"
          :key="item.id"
          @click="handleItemClick(item)"
        >
          <img :src="item.imgUrl" alt="加载错误" />
          <div class="item-body">
            <div class="item-desc">{{ item.title }}</div>
            <div class="item-footer">
              <div class="like">
                <i class="el-icon-share"></i>
                <div class="like-total">{{ item.likeNum }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </waterfall>
  </div>
</template>
<script>
export default {
  props: {
    // initdata: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  //   components:{MemeInfo},
  computed: {
    visibleData() {
      return this.initdata.slice(0, this.start + this.increment);
    },
  },
  data() {
    return {
      initdata: [], // 数据
      col: 3, // 瀑布列数（PC默认3）
      start: 10, // 已加载的数据条数
      increment: 3, // 每次加载的数据条数
      loadData: true, // 防抖开关
    };
  },
  methods: {
    handleItemClick(item) {
      this.$emit("handleClick", item);
    },
    // 滚动到底部到距离底部5px之间的距离就触发
    handleScroll() {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrollHeight = document.documentElement.scrollHeight;
      if (scrollTop + clientHeight >= scrollHeight - 1) {
        if (this.loadData) {
          this.loadMore();
        }
        this.loadData = !this.loadData;
      }
    },
    // 加载更多
    loadMore() {
      this.start += this.increment;
    },
    // 加载新数据
    setCardList(data) {
      this.initdata = data
    },
    // 如果客户端是手机则只展示一列
    setCol() {
      if(/Mobi/i.test(navigator.userAgent) || window.innerWidth < 768) {
        this.col = 1
      }
    }
  },
  mounted() {
    this.setCol()
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style scoped>
.item-body .item-desc {
  /* text-align: left; */
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  /* line-height: 16px; */
  color: #000000;
  background: #f0f0f0;
  text-align: center;
}

.item-body .item-footer {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.item-body .item-footer .footer-left {
  display: flex;
  align-items: center;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.6);
}

.item-body .item-footer .footer-left img {
  border-radius: 50%;
  width: 22px;
  height: 22px;
  margin-right: 4px;
}

.item-body .item-footer .like {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.4);
}

.item-body .item-footer .like img {
  margin-right: 4px;
}

.cell-item {
  width: calc(100% - 10px);
  /* margin-bottom: 6px; */
  background: #ffffff;
  border: 2px solid #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 auto 10px;
  padding: 10px;
  box-shadow: 0 0 5px 1px #999;
  margin-top: 10px;
}

.cell-item img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
