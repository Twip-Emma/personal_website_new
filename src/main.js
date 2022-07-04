/*
 * @Author: 七画一只妖
 * @Date: 2022-03-07 22:38:43
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 10:26:17
 * @Description: file content
 */
import Vue from 'vue'
import App from './App.vue'

// 引入路由
import VueRouter from "vue-router"
import ElementUI from 'element-ui';

// 使用路由
Vue.use(VueRouter)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
