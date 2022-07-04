<!--
 * @Author: 七画一只妖
 * @Date: 2021-11-17 14:15:29
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 11:25:46
 * @Description: file content
-->
<template>
    <div class="footer-wrap">
        <!-- 展示主要内容，最左边是图片 -->
        <el-row :gutter="20" class=" footer-info">
            <el-col class="ewm" :xs="24" :sm="4" >
                <img src="..\\..\\..\\..\\assets\\logo.png" alt="图片加载失败"
                          class="" style="width: 110px"/>
            </el-col>
            <el-col class="" :xs="24" :sm="7">
                <h4 class="">最新博客</h4>
                <div id="newblog-container">
                    ???
                </div>
            </el-col>
            <el-col class="" :xs="24" :sm="5">
                <h4 class="">联系我</h4>
                    ???
            </el-col>
            <el-col class="" :xs="24" :sm="8">
                <h4 class="">博客简介</h4>
                    ???
            </el-col>
        </el-row>
        <!-- 最底下一行文字，展示网站信息 -->
        <el-row>
            <div class="">
                <p class="">Copright©？起始年份-终止年份？ ？你的名字？ Designed by
                    ？你的名字？</p>
            </div>
        </el-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            footerList: [],
            imageUrl:"..\\..\\..\\..\\src\\assets\\logo.png"
        }
    },
    methods: {
    }
}
</script>

<style scoped>
    *:hover{
        cursor: pointer;
    }
    .footer-wrap {
        bottom: 0 !important;
        line-height: 2;
        position: relative;
        padding: 0px 0px;
        color: #eee;
        font-size: 14px;
        text-align: center;
        background-color: #545c64;
        transition: .2s;
    }
    .author{
        color: rgba(255,255,255,.5);
    }

</style>
