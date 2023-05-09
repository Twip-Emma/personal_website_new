<template>
  <div class="out">
    <waterfall :col="col" :data="data" :gutterWidth="0">
      <template>
        <div class="cell-item" v-for="(item, index) in data" :key="index">
          <img :src="item.imgSrc" alt="加载错误" />
          <div class="item-body">
            <div class="item-desc">{{ item.title }}</div>
            <div class="item-footer">
              <div class="like">
                <i class="el-icon-share"></i>
                <div class="like-total">{{ item.vote_num }}</div>
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
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      col: 3,
    };
  },
  methods: {},
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
