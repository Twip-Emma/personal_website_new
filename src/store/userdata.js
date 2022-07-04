/*
 * @Author: 七画一只妖
 * @Date: 2022-07-04 15:45:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 15:47:27
 * @Description: file content
 */


export default {
    namespaced:true,
    actions: {
        test(){
            console.log("在vuex里面，成功了")
        }
    },
    mutations: {},
    // 用户信息
    state: {
        userInfo: {
            nickname: "七画一只妖",
            avatar:"https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
        },
    },
    getters: {}
}