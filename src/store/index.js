/*
 * @Author: 七画一只妖
 * @Date: 2021-11-13 13:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-22 22:30:34
 * @Description: file content
 */

import Vue from "vue"
import Vuex from "vuex"

import globalData from '@/store/global'
import userData from '@/store/userdata'


// vuex 模块化管理
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        globalData: globalData,
        userData: userData
    }
})