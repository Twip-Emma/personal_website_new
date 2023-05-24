/*
 * @Author: 七画一只妖
 * @Date: 2022-03-07 22:38:43
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-24 22:30:20
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'

import "./utils/axios-config"

// 引入路由
import VueRouter from "vue-router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/global.css"

import router from "./router"
import store from "./store"

// MD渲染
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// import "./assets/css/markdown.css"
Vue.use(mavonEditor)

// 使用路由
Vue.use(VueRouter)
Vue.use(ElementUI)

// 使用瀑布流
import waterfall from "vue-waterfall2";
Vue.use(waterfall);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
