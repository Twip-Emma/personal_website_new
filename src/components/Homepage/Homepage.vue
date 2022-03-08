<!--
 * @Author: 七画一只妖
 * @Date: 2022-03-08 16:11:44
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-03-08 17:10:14
 * @Description: file content
-->
<template>
  <div id="out">
    <header class="head">
      <div class="head_logo_div">
        <img class="logo_img" src="~@/assets/images/twip.jpg" />
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
            <a href="help.html" class="cycle_a" id="item_2" target="_blank">
              <span class="cycle_icon_2"></span>
              <span class="cycle_text">
                <p class="item_name">TwipApi</p>
              </span>
            </a>
            <a
              href="game_items.html"
              class="cycle_a"
              id="item_3"
              target="_blank"
            >
              <span class="cycle_icon_3"></span>
              <span class="cycle_text">
                <p class="item_name">网页游戏</p>
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
              onclick="headclick()"
              class="head_img"
              src="~@/assets/images/pic/head.jpg"
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
            <div class="bar red" data-percent="40" data-skill="HTML5"></div>
            <div
              class="bar mint"
              data-percent="20"
              data-skill="JavaScript"
            ></div>
            <div class="bar lila" data-percent="30" data-skill="CSS3"></div>
            <div class="bar orange" data-percent="25" data-skill="Java"></div>
            <div class="bar gray" data-percent="65" data-skill="Python"></div>
            <div class="bar moe" data-percent="60" data-skill="C"></div>
            <div class="bar red" data-percent="10" data-skill="C#"></div>
            <div class="bar lila" data-percent="30" data-skill="MySQL"></div>
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
            <P></P>
            <P>And I'm trying to take you out of my mind</P>
            <P></P>
            <P>My head is spinning over you</P>
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
                <p>也许是被这些突如其来的变化</p>
                <p>让我喘不过气</p>
                <p>也可能是我做的决定</p>
                <p>是一段漫长且孤寂的旅程</p>
              </div>
            </li>
            <li>
              <div>
                <br />
                <h1>2020.11.20</h1>
                <p>我看到那残破不堪的龙门</p>
                <p>在那一瞬仿佛时间都停止了</p>
                <p>也许是被这些突如其来的变化</p>
                <p>让我喘不过气</p>
                <p>也可能是我做的决定</p>
                <p>是一段漫长且孤寂的旅程</p>
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
                <p>轮滑社真是个不错的地方</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>Title #4</h2>
                <p>Text Content #4</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>Title #5</h2>
                <p>Text Content #5</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>Title #6</h2>
                <p>Text Content #6</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>Title #2</h2>
                <p>Text Content #2</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>Title #7</h2>
                <p>Text Content #7</p>
              </a>
            </li>
            <li>
              <a href="#">
                <h2>Title #8</h2>
                <p>Text Content #8</p>
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
              Twip | Emma |
              <a
                title="你想干什么？"
                href="https://space.bilibili.com/178547325"
                >七画不是八画</a
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
// import about from '@/assets/js/about'
// import project from '@/assets/js/project'

export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
@import '~@\\components\\Homepage\\about.css';

</style>