<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-18 17:10:48
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-22 23:10:04
 * @Description: file content
-->
<template>
  <div id="body-wrap">

    <main id="content-outer">
        <!-- 整体 -->
        <div class="layout_page" id="content-inner">
            <!-- 左侧区域 -->
            <div class="aside_content" id="aside_content">
                <!-- 头像容器、简介 -->
                <div class="card-widget card-info">
                    <div class="card-content">
                        <div class="card-info-avatar is-center">
                            <img class="avatar-img" src="http://cdngoapl.twip.top/%E7%A5%9E%E9%B9%BF%E7%A5%88%E7%A6%8F-%E5%A4%B4%E5%83%8F%E5%B0%BA%E5%AF%B8.jpg" alt="avatar">
                            <div class="author-info__name">七画一只妖</div>
                            <div class="author-info__description">简介简介简介简介简介简介简介简介简介简介简介简介</div>
                        </div>
                        <div class="card-info-social-icons is-center">
                            <a class="social-icon" href="https://github.com/laoxuai" target="_blank">
                                <i class="fa fa-github"></i>
                            </a>
                            <a class="social-icon" href="mailto:1157529280@qq.com" target="_blank">
                                <i class="fa fa-envelope" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                </div>	
                
                <!-- 一言容器  -->
                <div class="card-widget card-announcement">
                    <div class="card-content">
                        <div class="item-headline">
                            <i class="fa fa-bullhorn" aria-hidden="true"></i>
                            <span>一言</span>
                        </div>
                        <div id="hitokoto">画中之境，心中之景</div>
                    </div>
                </div>

                <!-- 每日诗句容器 -->
                <div class="card-widget card-announcement">
                    <div class="card-content">
                        <div class="item-headline">
                            <i class="fa fa-calendar" aria-hidden="true"></i>
                            <span>今日诗词</span>
                        </div>
                        <div id="jinrishici-sentence">霜风未曾适，波岸干鸟鸣。</div>
                    </div>
                </div>

                <!-- 站点信息容器 -->
                <div class="card-widget card-webinfo">
                    <div class="card-content">
                        <div class="item-headline">
                            <i class="fa fa-line-chart" aria-hidden="true"></i>
                            <span>站点信息</span>
                        </div>
                        <div class="webinfo">
                            <div class="webinfo-item">
                                <div class="webinfo-site-uv-name">本站访客数 :</div>
                                <div class="webinfo-site-uv-count" id="busuanzi_value_site_uv">120</div>
                            </div>
                            <div class="webinfo-item">
                                <div class="webinfo-site-name">本站总访问量 :</div>
                                <div class="webinfo-site-pv-count" id="busuanzi_value_site_pv">9999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 右侧大容器 -->
            <article id="page">
                <div class="article-container">
                    <h2>学习轨迹</h2>
                    <Study/>
                    <hr>
                    
					<h2>技能属性</h2>
                    <Skill/>

                    <hr>
					<h2>个人简介</h2>
                    <Info/>
					
					<hr>
                    <h2>我的收藏</h2>
                    <Tool/>
                    
                </div>
            </article>
         </div>
    </main>
</div>
</template>

<script>
import Skill from '@/components/Blog/components/about/Skill'
import Info from '@/components/Blog/components/about/Info'
import Tool from '@/components/Blog/components/about/Tool'
import Study from '@/components/Blog/components/about/Study'
export default {
    components:{Skill,Info,Tool,Study}
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}
html {
    height: 100%;
}
body {
    position: relative;
    min-height: 100%;
    background: #eee;
    color: #4c4948;
    font-size: 14px;
    font-family: Lato, Helvetica Neue For Number, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Hiragino Sans GB, "Microsoft JhengHei", "MicrMicrosoft YaHei", Helvetica Neue, Helvetica, Arial, sans-serif;
    line-height: 2;
}
body {
    margin: 0;
}
h1, h2, h3, h4, h5, h6 {
    position: relative;
    margin: 1rem 0 .7rem;
    color: #344c67;
    font-weight: 700
}
hr:before {
    position: absolute;
    top: -10px;
    left: 5%;
    z-index: 1;
    color: #49b1f5;
}
hr {
    position: relative;
    margin: 2rem auto;
    width: calc(100% - 4px);
    border: 2px dashed #a4d8fa;
    background: #fff;
}
hr {
    box-sizing: content-box;
    height: 0;
    overflow: visible;
}
a {
    background-color: transparent;
}
strong{
    color: #FF0066;
}
#body-wrap {
    position: relative;
    /* display: box; */
    display: flex;
    box-flex: 1;
    flex: 1 auto;
    -webkit-box-orient: vertical;
    flex-direction: column;
    transition: all .5s;
}

main {
    display: block;
}

#content-outer {
    -webkit-box-flex: 1;
    -moz-box-flex: 1;
    -o-box-flex: 1;
    box-flex: 1;
    -webkit-flex: 1 auto;
    -ms-flex: 1 auto;
    flex: 1 auto;
}
h1 {
    font-size: 2em;
    margin: .67em 0;
}
.layout_page {
    display: flex;
    -webkit-box-align: start;
    align-items: flex-start;
    margin: 0 auto;
    padding: 0 15px;
    max-width: 1200px;
}

#page{
    margin-top: 20px;
    width: 75%;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
    transition: all .3s;
}
#page{
    padding: 40px 44px 44px;
}

#aside_content {
    width: 25%;
}
#aside_content .card-widget {
    overflow: hidden;
    margin-top: 20px;
    border-radius: 8px;
    background: #fff;
    -webkit-box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
    box-shadow: 0 4px 8px 6px rgba(7, 17, 27, .06);
    -webkit-transition: all .3s;
    -moz-transition: all .3s;
    -o-transition: all .3s;
    -ms-transition: all .3s;
    transition: all .3s;
}
#aside_content .card-content {
    padding: 1rem 1.2rem;
}

.is-center {
    text-align: center;
}

#aside_content .card-info img {
    display: inline-block;
    padding: 5px;
    width: 120px;
    height: 120px;
    border-radius: 70px;
    vertical-align: top;
    transition: all .3s;
}
img {
    max-width: 100%;
    transition: all .2s;
}
.avatar-img {
    animation: avatar_turn_around 2s linear infinite;
}
#aside_content .card-info .author-info__name {
    font-weight: 500;
    font-size: 1.1rem;
}
aside_content .card-info .author-info__description {
    margin-top: -.3rem;
}
#aside_content .card-info .card-info-social-icons {
    margin: .3rem 0 -.3rem;
}
#aside_content .card-info .card-info-social-icons .social-icon {
    margin: 0 .5rem;
    color: #4c4948;
    font-size: 1.5rem;
}

#aside_content .item-headline {
    font-size: .8rem;
}
#aside_content .item-headline span {
    margin-left: .5rem;
}

#aside_content .card-webinfo .webinfo {
    padding: .2rem 1rem;
}
#aside_content .card-webinfo .webinfo .webinfo-item {
    display: block;
    padding: 4px 0 0;
}
#aside_content .card-webinfo .webinfo .webinfo-item div:first-child {
    display: inline-block;
}
#aside_content .card-webinfo .webinfo .webinfo-item div:last-child {
    display: block;
    float: right;
}

@media screen and (max-width: 768px){
    .layout_page {
        padding: 0 5px !important;
    }
    #page {
        margin: 0;
        padding: 1.8rem 1.3rem;
    }
}

@media screen and (max-width: 900px){
    #page{
        width: 100% !important;
    }
    #aside_content{
        width: 100% !important;
    }
    .layout_page {
        -webkit-box-orient: vertical;
        -moz-box-orient: vertical;
        -o-box-orient: vertical;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
    }
}



@media screen and (min-width: 900px){
    #aside_content .card-widget {
        margin-right: 15px;
    }
}

::-webkit-scrollbar {
    width: 2px;
    height: 2px
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, #FF0066 0%, #FF00CC 100%); width: 85%
}

::-webkit-scrollbar-track {
    background-color: transparent
}



</style>