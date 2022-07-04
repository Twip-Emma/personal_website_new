/*
 * @Author: 七画一只妖
 * @Date: 2021-11-13 13:19:50
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2021-11-21 10:20:08
 * @Description: file content
 */

import Vue from "vue"
import Vuex from "vuex"

import globalData from '@/store/global'



Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        globalData: globalData
    }
})