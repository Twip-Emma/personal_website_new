/*
 * @Author: 七画一只妖
 * @Date: 2022-03-07 22:38:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 10:51:44
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'

// 引入路由
import VueRouter from "vue-router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/global.css"

import router from "./router"
import store from "./store"

// 使用路由
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
