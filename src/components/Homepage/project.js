var h = window.innerHeight; //显示高度
var w = window.innerWidth; //显示宽度
var debug = false; //调试模式

//解析XML
// function loadXml(str) {
// 	if(str == null) {
// 		return null;
// 	}
// 	var doc = str;
// 	try {
// 		doc = createXMLDOM();
// 		doc.async = false;
// 		doc.loadXML(str);
// 	} catch(e) {
// 		doc = $.parseXML(str);
// 	}
// 	return doc;
// }

//统计访问时间
// var last;

// function lastInfo() {
//     var tdate = new Date();
//     last = cokie.get("runInfo");
//     if (last == null) {
//         last = {
//             "day": tdate.toLocaleString(),
//             "time": tdate.getTime(),
//             "cont": 1
//         };
//         cokie.set("runInfo", JSON.stringify(last));
//         console.log("初次见面，还请多多指教");
//     } else {
//         // last = JSON.parse(cokie.get("runInfo"));
//         // console.log("上次访问时间" + last.day);
//         // console.log("统计访问次数" + last.cont);
//         last.day = tdate.toLocaleString();
//         last.time = tdate.getTime();
//         if (tdate.getTime() - last.time < 60000) last.cont++; //1分钟之内只统计一次访问次数
//         cokie.set("runInfo", JSON.stringify(last));
//     }

// }
// //Cookie
// var cokie = {
//     //写cookies
//     set: function(name, value) {
//         var Days = 30;
//         var exp = new Date();
//         exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
//         document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
//     },

//     //读取cookies

//     get: function(name) {
//         var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
//         if (arr = document.cookie.match(reg)) return unescape(arr[2]);
//         else return null;
//     },

//     //删除cookies

//     del: function(name) {
//         var exp = new Date();
//         exp.setTime(exp.getTime() - 1);
//         var cval = this.del(name);
//         if (cval != null) document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
//     }
// };

//图片预加载
function preLoadImg() {
    var img = new Image();
    img.src = "url";
}

//随机数
function RandomNum(Min, Max) {
    var Range = Max - Min;
    var Rand = Math.random();
    var num = Min + Math.round(Rand * Range);
    return num;
}

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
    };
    var timeold = (today.getTime() - BirthDay.getTime());
    var sectimeold = timeold / 1000;
    var secondsold = Math.floor(sectimeold);
    var msPerDay = 24 * 60 * 60 * 1000;
    var e_daysold = timeold / msPerDay;
    var daysold = Math.floor(e_daysold);
    var e_hrsold = (e_daysold - daysold) * 24;
    var hrsold = Math.floor(e_hrsold);
    var e_minsold = (e_hrsold - hrsold) * 60;
    var minsold = Math.floor((e_hrsold - hrsold) * 60);
    var seconds = Math.floor((e_minsold - minsold) * 60);
    return checkTime(daysold) + "天" + checkTime(hrsold) + "小时" + checkTime(minsold) + "分" + checkTime(seconds) + "秒";
}

//更新存活时间
function show_date_time() {
    var tm = document.getElementsByName('show_time');
    //for循环动态定位要写时间的地方
    for (var i = 0; i < tm.length; i++) {
        tm[i].innerText = "七画一只妖の主页已存活" + getDateDiff(tm[i].title);
    }
    //window.setTimeout("show_date_time()", 1000);
}
var show_date_timer = setInterval(show_date_time, 1000);

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}