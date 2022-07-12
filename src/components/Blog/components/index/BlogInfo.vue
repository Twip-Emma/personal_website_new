<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-19 09:40:09
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-12 10:56:03
 * @Description: file content
-->
<template>
  <el-container class="animate__animated animate__fadeIn">
    <el-card
      style="background-color: rgba(255, 255, 255, 1)"
      class="first-card"
    >
      <div slot="header" class="total blog-info">
        <div class="user-info">
          <el-avatar size="small" :src="blog.user.avatar"></el-avatar>
          <a href="#" class="header">{{ blog.user.nickname }}</a>
        </div>
        <div class="blog-date">
          <i class="el-icon-date"></i>
          <span>{{ blog.createTime }}</span>
        </div>
        <div>
          <i class="el-icon-view"></i>
          <span>{{ blog.views }}</span>
        </div>
      </div>
      <el-image class="blog-pic" :src="blog.firstPicture"></el-image>
      <hr />
      <h2 class="blog-title header">
        {{ blog.title }}
        <el-tag
          effect="plain"
          type="warning"
          style="font-weight: bold; font-size: small; margin-left: 20px"
        >
          {{ blog.flag }}
        </el-tag>
      </h2>
      <div
        class="typo m-padded-lr-responsive m-padded-tb-large"
        v-html="blog.content"
      ></div>
      <div class="tags">
        <div class="tag-item" v-for="tag in blog.tags" :key="tag.id">
          <div class="sjx-outer">
            <div class="sjx-inner"></div>
          </div>
          <div class="tag">
            {{ tag.name }}
          </div>
        </div>
      </div>
      <div class="appreciate">
        <el-popover
          placement="bottom"
          title=""
          width="300"
          trigger="hover"
          content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
        >
          <div class="give-money">
            <div class="give-money-item">
              <el-image :src="wechart" title="微信支付"></el-image>
              <p>微信</p>
            </div>
            <div class="give-money-item">
              <el-image :src="alipay" title="支付宝支付"></el-image>
              <p>支付宝</p>
            </div>
          </div>
          <el-button class="zanshang" slot="reference" type="danger" round plain
            >赞赏</el-button
          >
        </el-popover>
      </div>
      <div class="author">
        <ul>
          <li>作者 {{ blog.user.nickname }}</li>
          <li>发表时间 {{ blog.createTime }}</li>
        </ul>
      </div>
      <!-- 展示评论区 -->
      <div shadow="never" class="comments">
        <div class="header">发送一条友善的评论吧~</div>
        <CommentBlog />
      </div>
    </el-card>
  </el-container>
</template>

<script>
import CommentBlog from "@/components/Blog/components/index/CommentBlog";
export default {
  components: { CommentBlog },
  props:["id"],
  data() {
    return {
      administrator: false,
      userInfo: [],
      blog: {
        id: 449,
        title: "原生html配合canvas仿echarts图标组件合集",
        content:
          '<h4 id="介绍">介绍</h4>\n<p>这是一个多人项目中的一个模块，我负责了数据展示的部分，用原生的Canvas实现了进度条，饼图，雷达图，水滴图，日历图等图表的展现。采用面向对象的方式，将每个图表分为一个独立的类，将dom元素和option选项，option选项尽可能模仿echarts的选项配置。</p>\n<h4 id="开源地址">开源地址</h4>\n<p><a href="https://gitee.com/tyoubin_admin/echarts-canvas.git" target="_blank">https://gitee.com/tyoubin_admin/echarts-canvas.git</a>\n欢迎fork和star！</p>\n<h4 id="预览地址">预览地址</h4>\n<p><a href="http://hikari.top:8104/" target="_blank">http://hikari.top:8104/</a></p>\n<p><strong>饼图</strong>：用于展示笔记的分类。</p>\n<p>亮点：1.开场动画：每个扇形角度逐渐旋转变大，起始角度根据扇形所占空间实时计算；同时标签的引线从对应扇形半径长度开始逐渐前进，直到标签所在位置；标签文字从浅变深逐渐显示。</p>\n<p>​\t\t\t2.模式控制：可以按照不同的配置选项展现普通饼图和玫瑰饼图两种形式，也可以控制标签是否显示。</p>\n<p>​\t\t\t3.鼠标动画：鼠标在元素上滑动时通过角度和半径计算是否位于某个扇形区域内，鼠标所在的区域颜色变亮，半径逐渐变长，鼠标箭头变为手势。</p>\n<p><strong>雷达图</strong>：用于展示我的状态分布。</p>\n<p>亮点：1：开场动画：开始时背景多边形，标签，以及各项的顶点已就位，内部多边形从中心开始均匀向各个方向逐渐延申，知道达到所在顶点位置。</p>\n<p>​\t\t\t2：数据灵活：可以有2个以上的任意系列数，会自动根据输入的数据改变多边形的边数；输入多个大系类也会分不同颜色显示不同大系的分布。</p>\n<p>​\t\t\t3：鼠标动画：鼠标经过颜色变亮，鼠标箭头变为手指形状。</p>\n<p><strong>水球图</strong>：用于显示一周计划完成情况。</p>\n<p>亮点：1：水波动画：用正弦函数改变初相的方式生成不同初始相位的水滴图，实现平滑的动画效果，文字随水波位置的不同显示不同的底色；开始时水滴从空到最终位置也实现了过渡动画。</p>\n<p><strong>日历饼状图</strong>：用于显示一月内每天学习，运动以及其他三个模块完成质量的分布。</p>\n<p>亮点：1：日历形状：结合根据传入的不同时间，计算当月按周分行 的占位情况，之后绘制黑色边框和灰色网格。</p>\n<p>​\t\t\t2：组件复用：复用了已开发好的饼图，用在日历网格内创建dom节点的方式将饼图复用进去，使图表变美观的同时展现更加丰富的信息量。</p>\n<p><strong>仪表盘</strong>：用于展示我的综合得分。</p>\n<p>亮点：1：数据联动：开场时指针从0度开始旋转，直到到达相应的位置。同时显示的数值随之改变。</p>\n<p><strong>进度条</strong>：用于展示今日计划和长期计划的完成程度。</p>\n<p>亮点：1：开场动画：进度条从0开始逐渐增长。</p>\n<p>​\t\t\t2：响应式色彩：不同进度区间显示不同的颜色。</p>\n<p>同时，还有文字型数据统计以及根据不同事件类型显示不同颜色的时间轴，以及响应式卡片布局等。</p>\n',
        firstPicture:
          "http://cdngoapl.twip.top/pic_2.jpg",
        flag: "原创",
        views: 338,
        createTime: "2021-08-16T14:36:31.064+00:00",
        updateTime: "2021-08-16T14:36:31.064+00:00",
        description:
          "\n#### 介绍\n这是一个多人项目中的一个模块，我负责了数据展示的部分，用原生的Canvas实现了进度条，饼图，雷达图，水滴图，日历图等图表的展现。采用面向对象的方式，将每个图表分为一个独立的类，将dom元素和option选项，option",
        type: {
          id: 1,
          name: "web前端",
          pic_url: "http://cdngoapl.twip.top/pic_2.jpg",
          color: "#59c9fb",
        },
        tags: [
          { id: 1, name: "JavaScript" },
          { id: 2, name: "css" },
          { id: 3, name: "html" },
        ],
        user: {
          id: 1,
          nickname: "七画一只妖",
          avatar:
            "https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
          type: "1",
          createTime: "2021-10-13T13:55:12.179+00:00",
          updateTime: "2021-10-13T13:55:12.179+00:00",
          lastLoginTime: "2021-10-13T13:55:12.000+00:00",
        },

        tagIds: null,
      },
      wechart:
        "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
      alipay:
        "https://cdn.jsdelivr.net/gh/yuewuzhijian/sdorica-figure/e0046/e0046s5_figure.png",
      commentForm: {
        content: "",
      },
    };
  },
  methods:{
  },
  mounted(){
  }
};
</script>

<style scoped>
.el-card {
  width: 100%;
}
.first-card {
  border-radius: 10px 10px 0 0;
  position: relative;
  padding-bottom: 100px;
}
/*text-align: center;*/
.first-card .blog-pic {
  border-radius: 8px;
}
hr.style-one {
  width: 100%;
  background-image: linear-gradient(
    to right,
    rgba(64, 158, 255, 0),
    rgba(64, 158, 255, 0.75),
    rgba(64, 158, 255, 0)
  );
}
.appreciate {
  text-align: center;
}
.give-money {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #409eff;
  border-radius: 10px;
}
.give-money .give-money-item {
  border-radius: 10px;
  padding: 10px;
  width: 50%;
  text-align: center;
}
.give-money .give-money-item .el-image {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: 5px;
  margin-right: 5px;
}
.give-money .give-money-item p {
  font-size: smaller;
  font-weight: bold;
  color: #3a8ee6;
  display: block;
  line-height: 20px;
  margin: 0;
}
.tags {
  display: flex;
  align-items: center;
  margin-left: 50px;
}
.tag-item {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20px;
}
.tag {
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5px;
  background-color: #ecf5ff;
  border: 1px solid #409eff;
  color: #409eff;
  display: flex;
}
.sjx-outer {
  width: 0;
  height: 0;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-right: 7px solid #409eff;
  position: relative;
}
.sjx-inner {
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-right: 7px solid #ecf5ff;
  top: -7px;
  left: 1px;
  position: absolute;
}
.author {
  text-align: left;
  background-color: #fcfff5;
  box-shadow: 0 0 0 1px #a3c293 inset;
  color: #2c662d;
  width: 100%;
  position: absolute;
  left: 0;
  margin: 20px 0;
  padding: 20px 0;
  font-size: small;
  font-family: PingFang SC, Lantinghei SC, Microsoft Yahei, Hiragino Sans GB,
    Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
}
.comments {
  margin-top: 150px;
  text-align: left;
}
.comments .reply {
  margin-left: 40px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
.comments .reply:hover {
  color: #000000;
  cursor: pointer;
}
.comments .delete {
  margin-left: 10px;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
}
.comments .delete:hover {
  color: #000000;
  cursor: pointer;
}
.comments .header {
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  font-weight: 700;
  font-size: 1.28571429rem;
  color: rgba(0, 0, 0, 0.87);
}
.blog-pic {
  width: 100%;
}
.blog-title {
  text-align: center;
}
.blog-info {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 13px;
}
.blog-info .blog-date {
  margin-right: 5px;
}
.blog-info .user-info {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 15px;
}
.blog-info .user-info .el-avatar {
  margin-right: 5px;
  width: 22px;
  height: 22px;
}
.blog-info .user-info .header {
  text-decoration: none;
  color: #3a8ee6;
  font-weight: bold;
}
@media screen and (max-width: 768px) {
  .tags {
    margin-left: 0;
  }
  hr {
    display: none;
  }
  .comment-content {
    font-size: 12px !important;
  }
}
@media only screen and (max-width: 480px) {
  h2 {
    font-weight: normal;
  }
  code,
  pre {
    font-size: 13px !important;
  }
}
</style>