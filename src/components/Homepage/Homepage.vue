<!--
 * @Author: 七画一只妖
 * @Date: 2022-03-08 16:11:44
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-04-10 09:14:52
 * @Description: file content
-->
<template>
  <div id="out">
    <header class="head">
      <div class="head_logo_div">
        <img class="logo_img" src="http://cdngoapl.twip.top/%E7%94%A8%E6%88%B7%E5%A4%87%E9%80%89%E5%A4%B4%E5%83%8F/%E4%B8%83%E7%94%BB%E4%B8%80%E5%8F%AA%E5%A6%963.jpg" />
      </div>
      <div class="head_nav_div">
        <nav class="head_nav">
          <ul id="nav_ul">
            <li class="nav_li_on nav_ul_li">主页</li>
            <li class="nav_ul_li">个人技能</li>
            <li class="nav_ul_li">个人经历</li>
            <li class="nav_ul_li">个人爱好</li>
            <li class="nav_ul_li">鸣谢</li>
            <li id="huam"></li>
          </ul>
        </nav>
      </div>
      <div class="clear"></div>
    </header>
    <!-- 右侧四个小按钮 -->
    <ul class="float_btn" id="float_btn">
      <li class="btn_on"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div id="arrow_img" class="arrow_div">
      <img class="arrow_img" src="~@/assets/images/icon/arrowhead.png" />
    </div>
    <div class="wrapBox" id="wrapBox" style="top: 0px">
      <!-- 第一页 -->
      <div class="box bg01" id="box">
        <!-- 头像区 -->
        <div class="box01_content">
          <div id="cycle_item" class="cycle_item">
            <!-- 三个小按钮 -->
            <a
              href="https://space.bilibili.com/178547325"
              class="cycle_a"
              id="item_1"
              target="_blank"
            >
              <span class="cycle_icon_1"></span>
              <span class="cycle_text">
                <p class="item_name">B站主页</p>
              </span>
            </a>
            <a class="cycle_a" id="item_2" @click="pageSwitch('Login')">
              <span class="cycle_icon_2"></span>
              <span class="cycle_text">
                <p class="item_name">前往博客</p>
              </span>
            </a>
            <a
              href="https://github.com/Twip-Emma"
              class="cycle_a"
              id="item_3"
              target="_blank"
            >
              <span class="cycle_icon_3"></span>
              <span class="cycle_text">
                <p class="item_name">GitHub</p>
              </span>
            </a>
            <!-- 头像边上动画 -->
            <svg
              version="1.1"
              baseProfile="tiny"
              x="0px"
              y="0px"
              width="260px"
              height="260px"
              viewBox="0 0 260 260"
              xml:space="preserve"
              class="green_cycle_img"
            >
              <path
                fill="none"
                stroke="#009245"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M259.207,129.953c0,71.244-57.755,129-129,129
	s-129-57.756-129-129c0-71.245,57.755-129,129-129"
              ></path>
            </svg>
            <svg
              class="yellow_cycle_img"
              version="1.1"
              baseProfile="tiny"
              x="0px"
              y="0px"
              width="240px"
              height="240px"
              viewBox="0 0 240 240"
              xml:space="preserve"
            >
              <path
                fill="none"
                stroke="#FFFF00"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M1.344,120.055c0-65.722,53.278-119,119-119
	c65.723,0,119,53.278,119,119s-53.277,119-119,119"
              ></path>
            </svg>
            <svg
              class="blue_cycle_img"
              version="1.1"
              x="0px"
              y="0px"
              width="220px"
              height="220px"
              viewBox="0 0 220 220"
              enable-background="new 0 0 220 220"
              xml:space="preserve"
            >
              <path
                fill="none"
                stroke="#0000FF"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M110.273,218.98c-60.199,0-109-48.802-109-109"
              ></path>
              <path
                fill="none"
                stroke="#0000FF"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M219.273,109.98"
              ></path>
              <path
                fill="#FFFFFF"
                stroke="#0000FF"
                stroke-width="2"
                stroke-miterlimit="10"
                d="M110.273,0.98"
              ></path>
            </svg>
            <img
              id="head"
              @click="headclick()"
              class="head_img"
              src="http://cdngoapl.twip.top/%E7%94%A8%E6%88%B7%E5%A4%87%E9%80%89%E5%A4%B4%E5%83%8F/%E4%B8%83%E7%94%BB%E4%B8%80%E5%8F%AA%E5%A6%963.jpg"
            />
          </div>
          <h1 class="title">七画一只妖</h1>
          <h2 class="title_h2">七个笔画，即为“妖”</h2>
          <div id="box01_text">
            <p></p>
            <p>花开一季的惊艳</p>
            <p>写尽人生</p>
          </div>
        </div>
      </div>
      <!-- 第二页 -->
      <div class="box bg02">
        <div class="box_content box02_content">
          <!-- 技能点（bushi） -->
          <div id="bar_container" class="bar_container">
            <div class="bar red" data-percent="50" data-skill="HTML5+CSS+JSES4"></div>
            <div
              class="bar mint"
              data-percent="70"
              data-skill="VUE2"
            ></div>
            <div class="bar lila" data-percent="30" data-skill="JSES6"></div>
            <div class="bar orange" data-percent="70" data-skill="Java"></div>
            <div class="bar gray" data-percent="65" data-skill="Python"></div>
            <div class="bar moe" data-percent="75" data-skill="SSM+SpringBoot"></div>
            <div class="bar red" data-percent="70" data-skill="MyBatis+Mybatis-plus"></div>
            <div class="bar lila" data-percent="60" data-skill="SpringCloud+主流中间件"></div>
          </div>
          <!-- 歌词 -->
          <div id="box02_text">
            <h1>Spinning Over You</h1>
            <div class="overline"></div>
            <p>My head is spinning over you</p>
            <p></p>
            <!-- 留空段落达到延迟效果 -->
            <p>I think I'm losing my defenses</p>
            <p></p>
            <p>And when I'm standing next to you</p>
            <p></p>
            <p>I feel the failure of my senses</p>
            <p></p>
            <p>You keep me locked under your spell</p>
            <p></p>
            <p>I think I'm losing my direction</p>
            <p></p>
            <p>And when I hear you say my name</p>
            <p></p>
            <p>My body falls under sedation</p>
            <p></p>
            <p></p>
            <p>And I'm trying and trying and trying</p>
            <p></p>
            <p>And I'm trying god knows I'm trying</p>
            <p></p>
            <p>And I'm trying to take you out of my mind</p>
            <p></p>
            <p>My head is spinning over you</p>
          </div>
          <div class="clear"></div>
        </div>
      </div>
      <!-- 第三页 -->
      <div class="box bg03">
        <div class="box_content box03_content">
          <ul id="timeUl" class="timeUl">
            <li>
              <div>
                <h1>2019.07.31</h1>
                <p>怀着美好的愿望</p>
                <p>却只能得到失望的答案</p>
              </div>
            </li>

            <li>
              <div>
                <h1>2019.10.31</h1>
                <p>从城市到此</p>
                <p>跨过河流小溪</p>
                <p>湍急的人流一眼就看到了你</p>
              </div>
            </li>

            <li>
              <div>
                <h1>2019.11.25</h1>
                <p>到了半山腰</p>
                <p>我们坐在一起</p>
                <p>才发现</p>
                <p>你就像那跃出的锦鲤</p>
                <p>浪漫的有些肆意</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2019.12.30</h1>
                <p>到了晚上</p>
                <p>天空下起了小雨</p>
                <p>我拿出了我的伞</p>
                <p>在雨中漫步</p>
              </div>
            </li>

            <li>
              <div>
                <br />
                <h1>2020.01.15</h1>
                <p>天亮了</p>
                <p>雨渐渐停了</p>
                <p>我看的很仔细</p>
                <p>收伞人却都不是你</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.01.23</h1>
                <p>我在路上走着走着</p>
                <p>天转雨晴</p>
                <p>朝暮相替</p>
                <p>黄花满地</p>
                <p>各生有趣</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.02.10</h1>
                <p>到了山顶</p>
                <p>只把一颗心寄托在你这里</p>
                <p>便不会丢了自己</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.02.20</h1>
                <p>早晨</p>
                <p>我起了个大早</p>
                <p>看云海水田一线里</p>
                <p>一轮红日升起</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.04.01</h1>
                <p>风吹得茅草倒伏</p>
                <p>我躺在草地上</p>
                <p>看云看天</p>
                <p>看着你那洒满朝阳的侧脸</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.07.31</h1>
                <p>起风了</p>
                <p>天色将要下雨</p>
                <p>我起身会往山顶小屋</p>
                <p>进入梦乡</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.08.25</h1>
                <p>这一睡就是一天</p>
                <p>差不多该收拾东西下山了</p>
                <p>天空乌云密布</p>
                <p>我却找不到我的雨伞了</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.09.01</h1>
                <p>走下山去</p>
                <p>寒风吹拂过寂静的空气</p>
                <p>卷起孤零的落叶</p>
                <p>深色的天幕低垂</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.09.15</h1>
                <p>天空渐渐下了小雨</p>
                <p>我没有伞</p>
                <p>只得狼狈的奔跑</p>
                <p>路上的行人仿佛在讥笑我一样</p>
                <p>异常尖锐</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.10.01</h1>
                <p>我找到了避雨的小屋</p>
                <p>我推开吱呀作响的门</p>
                <p>屋内的窗纸早已荡然无存</p>
                <p>只剩下横竖的窗格</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.10.10</h1>
                <p>窗格上系满了泛黄的绸带</p>
                <p>在空中无助的摇曳</p>
                <p>仿佛是一位长者在此</p>
                <p>对我诉说着这里无聊和孤寂</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.10.20</h1>
                <p>长者</p>
                <p>我仿佛想到了什么</p>
                <p>发疯似地往外面跑去</p>
                <p>雨恰好也停了</p>
                <p>我可以继续下山去</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.11.07</h1>
                <p>我看到那残破不堪的龙门</p>
                <p>在那一瞬仿佛时间都停止了</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2021.01.01</h1>
                <p>也许是被这些突如其来的变化</p>
                <p>让我喘不过气</p>
                <p>也可能是我做的决定</p>
                <p>是一段漫长且孤寂的旅程</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2021.01.09</h1>
                <p>也可能是因为心中的信念</p>
                <p>使我一直走下去</p>
                <p>一步一步的走下去</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2021.02.14</h1>
                <p>也可能是因为身体的虚弱</p>
                <p>我只能选择逃避</p>
                <p>我选择离开</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2021.03.15</h1>
                <p>越往下山去</p>
                <p>路上的行人越来越多</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2021.03.15</h1>
                <p>他们无神</p>
                <p>他们惊恐</p>
                <p>他们恐惧</p>
                <p>他们痛苦</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2021.07.01</h1>
                <p>我加快了下山的脚步</p>
                <p>突然大地都猛烈摇动了起来</p>
                <p>煞气充斥天地间</p>
                <p>整片天空都不再明媚</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2021.08.01</h1>
                <p>突然天空开始碎裂</p>
                <p>我仿佛被一种无形的力量拉走</p>
                <p>这些场景都离我而去</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2021.12.31</h1>
                <p>我猛地从床上醒来</p>
                <p>原来这一切都是梦</p>
                <p>时间不早了</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2022.01.09</h1>
                <p>天空将要下雨</p>
                <p>我拿起门口边上的雨伞</p>
                <p>走了出去</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2022.07.01</h1>
                <p>就送到这了</p>
                <p>前路多加小心</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 加载箭头 -->
        <div class="left_div" id="left_div">
          <img class="left_arrow" src="~@/assets/images/icon/arrowleft.png" />
        </div>
        <div class="right_div" id="right_div">
          <img class="right_arrow" src="~@/assets/images/icon/arrowright.png" />
        </div>
      </div>
      <!-- 第四页 -->
      <div class="box bg04">
        <div class="box_content box04_content">
          <h1 class="box04_title">Something Of Hobby</h1>
          <ul class="bq">
            <li>
              <a href="#">
                <br />
                <h2>世界好大啊</h2>
                <h2>原来外面的时间</h2>
                <h2>是这个这样子啊</h2>
                <!--<p>Text Content #1</p>-->
              </a>
            </li>
            <li>
              <a href="#">
                <br />
                <h2>轮滑社</h2>
                <h4>轮滑社真是个不错的地方</h4>
                <h4>既锻炼了身体，又能结交新朋友</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>社团理事会</h2>
                <h4>虽然只是财务</h4>
                <h4>但是如何管理好社团的资金也是值得思考的</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>软件工程</h2>
                <h4>当时只是觉得这个专业比较好玩，后面才发现编程挺有趣的</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>画境</h2>
                <h4>我的编程学习群，当时一上头创建的，高手云集，现在对我来说帮助不小</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>Twip-Emma</h2>
                <h4>两台QQ机器人，一台正式机一台测试机，对我来说的前后端启蒙项目</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>前后端</h2>
                <h4>其实前端只学到vue，主要还是攻后端，目前已经大致学完分布式，项目也做了几个</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>过家家</h2>
                <h4>谁知道呢，就像儿戏那样，只做表面功夫，害。。</h4>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>Github</h2>
                <h4>这玩意挺不错，里面的格子也代表了自己的努力，看着满墙的绿点，还是挺有成就感的</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div id="foot" class="foot">
        <h1 class="foot_title">Contact With Me</h1>
        <div class="foot_info_main">
          <ul>
            <li class="uname1_items">
              <a
                href="https://music.163.com/#/my/m/music/playlist?id=586484042"
                target="_blank"
                >歌单</a
              >
            </li>
            <li class="qie_items">
              <a href="https://user.qzone.qq.com/1157529280" target="_blank"
                >企鹅</a
              >
            </li>
            <li class="pan_items">
              <a href="null" target="_blank">推特</a>
            </li>
            <li class="email_items">
              <a href="https://mail.qq.com/" target="_blank">邮箱</a>
            </li>
          </ul>
        </div>
        <div class="foot_power">
          <!-- 网站基本备注 -->
          <h3>
            ©2021-2022 | 湘ICP备2021004586号
            <p title="Thanks" target="_blank">
             Cynthia·PicScene |
              <a
                title="你想干什么？"
                href="https://space.bilibili.com/178547325"
                >七画一只妖</a
              >
            </p>
            <!-- 计算时间 -->
            <p
              title="2021/04/24 20:00:00"
              name="show_time"
              style="cursor: progress"
            >
              时间
            </p>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import about from '@/components/Homepage/about'
export default {
  data() {
    return {
      globalData: {
        indexs: 0,
        indexs02: 0,
        iB: true,
      },
    };
  },
  methods: {
    pageSwitch(target){
      this.$router.push({
        name: target,
        query: {},
      });
    },
    headclick() {
      var ran = this.RandomNum(-360, 360);
      // var ran = 0;
      this.cycle(ran, 300);
      // setTimeout("cycle(" + ran + ",200);", 2250);
      setTimeout(this.cycle(ran, 200), 2250);
    },
    cycle(a, b) {
      var cycarr = document.getElementsByClassName("cycle_a");
      var aa = a;
      if (b == undefined) b = 200;
      for (var i = 0; i < cycarr.length; i++) {
        aa += 120;
        cycarr[i].style.animation = "unset";
        cycarr[i].style.transform =
          "rotate(" +
          (aa - aa * 2) +
          "deg) translateX(+" +
          b +
          "px) rotate(" +
          aa +
          "deg)";
      }
    },
    RandomNum(Min, Max) {
      var Range = Max - Min;
      var Rand = Math.random();
      var num = Min + Math.round(Rand * Range);
      return num;
    },
  },
  mounted() {
    console.log("欢迎来到，七画一只妖的小屋");

    // var indexs = 0;
    // var indexs02 = 0,
    // var iB = "";

    // 【变量】全局
    let indexs = this.globalData.indexs;
    let indexs02 = this.globalData.indexs02;
    var startTime;
    var flags = {};
    var h = 0;
    var w = 0;
    // window.onmousewheel = document.onmousewheel = scrollFunc;
    h = window.innerHeight;
    w = window.innerWidth;


    //然并卵的入口
    function about_main() {
      //加载时间计时开始
      startTime = new timer();
      //然并卵的检测分辨率
      if (w < 500) {
        alert("当前屏幕分辨率过低，可能无法显示全部内容");
      }
      loading();
      // lastInfo();
    }

    //加载动画
    function loading() {}

    //加载完成后运行
    function loaddone() {
      console.log("网页加载耗时" + startTime.stop() + "毫秒");
      if (w < 750) {
        cycle_b(false);
      }
      addClick(); //绑定按键
    }

    //淡入文字
    let indexs01 = 0;
    var box01_p = document.getElementById("box01_text").children;
    for (var i = 0; i < box01_p.length; i++) {
      box01_p[i].style.opacity = "0";
    }
    let boxOneTimer = setInterval(boxOne, 2400);

    function boxOne() {
      if (indexs != 0) {
        //暂无
      } else if (indexs01 < box01_p.length) {
        box01_p[indexs01].style.opacity = "1";
        indexs01++;
      } else {
        clearInterval(boxOneTimer);
      }
    }

    //第一屏文字加载
    var f_btn = document.getElementById("float_btn").children;
    var nav_ul = document.getElementById("nav_ul").children;
    var wrapBox = document.getElementById("wrapBox");
    var foot = document.getElementById("foot");
    var arrow = document.getElementById("arrow_img");
    var process = document.getElementById("bar_container").children; //进度条
    var box02_text = document.getElementById("box02_text").children; //第二屏文字
    var box02_timer;

    //气泡变形
    var cycle_b_flag = false;

    function cycle_b(b) {
      var cyc = byid("cycle_item");
      if (b != undefined) cycle_b_flag = b;
      if ((cycle_b_flag = !cycle_b_flag)) {
        cyc.classList.add("cycle_item_b");
      } else {
        cyc.classList.remove("cycle_item_b");
      }
    }

    //第二屏动画
    function boxTow() {
      // console.log("触发第二屏动画");
      if (indexs != 1) {
        //暂无
      } else if (indexs02 >= 0 && indexs02 < box02_text.length) {
        box02_text[indexs02].style.right = "0px";
        indexs02++;
        // console.log(indexs02)r
      } else {
        clearInterval(box02_timer);
      }
    }

    //滚动函数
    function divMove(overHeight) {
      var wrapBox = document.getElementById("wrapBox");
      if (overHeight == 4) {
        wrapBox.style.top = -h * 3 - foot.offsetHeight + "px";
      } else {
        wrapBox.style.top = -indexs * h + "px";
      }
    }

    //滚动函数
    // function btnChange(index, flag, speed) {
    function btnChange(index, flag) {
      var height = window.innerHeight;
      var fh = foot.offsetHeight;
      var n;
      for (n = 0; n < f_btn.length; n++) {
        f_btn[n].classList.remove("btn_on");
      }

      for (n = 0; n < nav_ul.length; n++) {
        nav_ul[n].classList.remove("nav_li_on");
      }

      if (flag) {
        if (index <= 0) {
          indexs = 0;
          f_btn[0].classList.add("btn_on");
          nav_ul[0].classList.add("nav_li_on");
          divMove(indexs);
        } else if (index > 0 && index <= 3) {
          f_btn[index].classList.add("btn_on");
          nav_ul[index].classList.add("nav_li_on");
          divMove(indexs);
        } else if (index == 4) {
          indexs = 4;
          divMove(indexs);
          nav_ul[index].classList.add("nav_li_on");
        } else {
          indexs = 4;
        }
      } else {
        if (index <= 0) {
          indexs = 0;
          f_btn[0].classList.add("btn_on");
          nav_ul[0].classList.add("nav_li_on");
          wrapBox.style.top = "0";
        } else if (index > 0 && index <= 3) {
          f_btn[index].classList.add("btn_on");
          nav_ul[index].classList.add("nav_li_on");
          wrapBox.style.top = -indexs * 100 + "%";
        } else if (index == 4) {
          indexs = 4;
          wrapBox.style.top = -height * 3 - fh + "px";
          nav_ul[index].classList.add("nav_li_on");
        } else {
          indexs = 4;
        }
      }
      if (indexs == 1 && !flags.box02) {
        //第二屏动画
        for (var i = 0; i < process.length; i++) {
          process[i].className += " active";
        }
        box02_timer = setInterval(boxTow, 1100);
        flags.box02 = true;
        indexs02 = 0;
        /*		for(var i = 0; i < box02_text.length; i++) {
                    box02_text[i].style.right = "-100%";
                }*/
      } else if (indexs == 2) {
        setTime_li();
      }
      if (indexs > 3) {
        arrow.style.bottom = "-50px";
      } else {
        arrow.style.bottom = "50px";
      }
    }

    //时间轴翻页
    var e_li = document.getElementById("timeUl").children;
    var li_times = 0;
    var left_div = document.getElementById("left_div");
    var right_div = document.getElementById("right_div");
    left_div.onclick = function () {
      if (li_times > 0) {
        li_times--;
        setTime_li();
      }
    };

    right_div.onclick = function () {
      if (li_times < e_li.length - 2) {
        li_times++;
        setTime_li();
      }
    };

    function setTime_li() {
      // var ii = document.getElementById("timeUl").children.length;
      var i;
      for (i = 0; i < e_li.length; i++) {
        e_li[i].style.width = 100 / e_li.length + "%";
      }
      document.getElementById("timeUl").style.width = e_li.length * 40 + "%";
      i = e_li[0].offsetWidth * li_times;
      document.getElementById("timeUl").style.left = 20 - i + "px";
    }

    //触屏手势事件
    window.addEventListener("touchstart", touchStart, false);
    window.addEventListener("touchmove", touchMove, false);
    window.addEventListener("touchend", touchEnd, false);
    var touchO = {
      startY: 0,
      endY: 0,
      oldY: 0,
      flag: 0,
      startTop: 0,
    };

    function touchStart(event) {
      if (touchO.flag == 0) {
        wrapBox.classList.add("warpBox_tochMoveing");
        touchO.startY = event.touches[0].clientY;
        touchO.startTop = -indexs * 100;
        touchO.flag = 1;
      }
    }

    function touchMove(event) {
      if (touchO.flag == 1) {
        touchO.endY = event.touches[0].clientY;
        var movesize = touchO.endY - touchO.startY;
        wrapBox.style.top = touchO.startTop + (movesize / h) * 100 + "%";
      }
    }

    // function touchEnd(event) {
    function touchEnd() {
      if (touchO.flag == 1) {
        touchO.flag = 2;
        wrapBox.classList.remove("warpBox_tochMoveing");
        if (touchO.oldY == touchO.endY) {
          return;
        }
        touchO.oldY = touchO.endY;
        if (touchO.endY - touchO.startY > 100) {
          //向上滑动
          indexs = indexs - 1;
          btnChange(indexs, true, 1);
        } else if (touchO.startY - touchO.endY > 100) {
          //向下滑动
          indexs = indexs + 1;
          btnChange(indexs, true, 1);
        } else {
          btnChange(indexs, true, 1);
        }
        touchO.flag = -1;
        setTimeout("touchO.flag=0", 900);
      }
    }

    function addClick() {
      // let huam = byid("huam");
      //浮动点击事件
      for (var i = 0; i < f_btn.length; i++) {
        f_btn[i].indexs = i;
        f_btn[i].onclick = function () {
          var speed = Math.abs(indexs - this.indexs);
          indexs = this.indexs;
          btnChange(indexs, true, speed);
        };
      }

      //浮动nav事件
      for (i = 0; i < nav_ul.length; i++) {
        nav_ul[i].indexs = i;
        nav_ul[i].onclick = function () {
          var speed = Math.abs(indexs - this.indexs);
          indexs = this.indexs;
          btnChange(indexs, true, speed);
        };
      }

      //箭头点击事件
      arrow.onclick = function () {
        indexs++;
        btnChange(indexs, true, 1);
      };
      var oB = true;

      //鼠标滑动事件
      var scrollFunc = function (e) {
        // var direct = 0;
        e = e || window.event;
        if (e.wheelDelta) {
          //IE/Opera/Chrome
          if (oB == true) {
            //向下滑动
            if (e.wheelDelta >= 120) {
              oB = false;
              indexs--;
              btnChange(indexs, true, 1);
              setTimeout(function () {
                oB = true;
              }, 700);
            } else if (e.wheelDelta <= -120) {
              oB = false;
              //向上滑动
              indexs++;
              btnChange(indexs, true, 1);
              setTimeout(function () {
                oB = true;
              }, 700);
            }
          }
        } else if (e.detail) {
          //Firefox
          if (oB) {
            if (e.detail >= 3) {
              oB = false;
              indexs++;
              btnChange(indexs, true, 1);
              setTimeout(function () {
                oB = true;
              }, 700);
            } else if (e.detail <= -3) {
              oB = false;
              indexs--;
              btnChange(indexs, true, 1);
              setTimeout(function () {
                oB = true;
              }, 700);
            }
          }
        }
      };

      /*注册事件*/
      if (document.addEventListener) {
        document.addEventListener("DOMMouseScroll", scrollFunc, false); //W3C
      }
      window.onmousewheel = document.onmousewheel = scrollFunc; //IE/Opera/Chrome/Safari

      //监听窗口改变
      window.onresize = function () {
        //document.getElementsByTagName("html")[0].style.fontSize = document.documentElement.clientWidth / 20 + 'px';
        h = window.innerHeight;
        w = window.innerWidth;
        // if (w / h >= 1920 / 1080) {
        //   this.globalData.iB = true;
        // } else {
        //   this.globalData.iB = false;
        // }
        divMove(indexs);
        setTime_li();
      };
    }

    /*计时函数
     * 用法
     * var time=new timer
     * time.stop()
     */
    function timer() {
      var t = new Date();
      var time = t.getTime();
      this.stop = function () {
        var t = new Date();
        return t - time;
      };
    }

    about_main();
    //下面是没有用到的函数，但是删了会报错的
    loaddone();
    // headclick();

    //############################################################
    //####################另一个文件卧槽！#########################
    function byid(s) {
      return document.getElementById(s);
    }

    //计算间隔天数
    function getDateDiff(st, en) {
      var BirthDay = new Date(st);
      var today;
      if (en != undefined) {
        today = new Date(en);
      } else {
        today = new Date();
      }
      var timeold = today.getTime() - BirthDay.getTime();
      // var sectimeold = timeold / 1000;
      // var secondsold = Math.floor(sectimeold);
  
      var msPerDay = 24 * 60 * 60 * 1000;
      var e_daysold = timeold / msPerDay;
      var daysold = Math.floor(e_daysold);
      var e_hrsold = (e_daysold - daysold) * 24;
      var hrsold = Math.floor(e_hrsold);
      var e_minsold = (e_hrsold - hrsold) * 60;
      var minsold = Math.floor((e_hrsold - hrsold) * 60);
      var seconds = Math.floor((e_minsold - minsold) * 60);
      return (
        checkTime(daysold) +
        "天" +
        checkTime(hrsold) +
        "小时" +
        checkTime(minsold) +
        "分" +
        checkTime(seconds) +
        "秒"
      );
    }

    //更新存活时间
    function show_date_time() {
      var tm = document.getElementsByName("show_time");
      for (var i = 0; i < tm.length; i++) {
        tm[i].innerText =
          "七画一只妖 の主页已存活" + getDateDiff(tm[i].title);
      }
      //window.setTimeout("show_date_time()", 1000);
    }
    setInterval(show_date_time, 1000);

    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
    }
  },
};
</script>

<style scoped>
@import "~@\\assets\\css\\about.css";
@import "~@\\assets\\css\\process.css";
</style>