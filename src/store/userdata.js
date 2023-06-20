/*
 * @Author: 七画一只妖
 * @Date: 2022-07-04 15:45:56
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-06 16:12:33
 * @Description: file content
 */
export default {
    // namespaced:true,
    actions: {
        test() {
            console.log("在vuex里面，成功了")
        },
        // 修改登陆状态
        changeLogined(context, value) {
            context.commit("_setLogined", value)
        }
    },
    mutations: {
        _setLogined(state, value) {
            state.logined = value
        }
    },
    // 用户信息
    state: {
        logined: false
    },
    getters: {}
}