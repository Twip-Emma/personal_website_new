<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 14:15:29
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-04 11:08:08
 * @Description: file content
-->
<template>
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
            <a href="https://space.bilibili.com/178547325" target="_blank">B站</a>
          </li>
          <li class="email_items">
            <a href="https://mail.qq.com/" target="_blank">邮箱</a>
          </li>
        </ul>
      </div>
      <div class="foot_power">
        <!-- 网站基本备注 -->
        
        <h3>
        <p>_</p>
        <p>©2021-2022 | 湘ICP备2021004586号</p>
          <p title="Thanks" target="_blank">
            Cynthia·PicScene |
            <a title="你想干什么？" href="https://space.bilibili.com/178547325"
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
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    // 个位数补齐0
    function checkTime(i) {
      if (i < 10) {
        i = "0" + i;
      }
      return i;
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
        tm[i].innerText = "七画一只妖 の主页已存活" + getDateDiff(tm[i].title);
      }
      //window.setTimeout("show_date_time()", 1000);
    }
    setInterval(show_date_time, 1000);
  },
};
</script>

<style scoped>
.foot_power {
  line-height: 30px;
}
</style>
