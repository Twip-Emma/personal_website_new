/*
 * @Author: 七画一只妖
 * @Date: 2022-07-04 15:45:56
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-05 19:29:52
 * @Description: file content
 */
export default {
    // namespaced:true,
    actions: {
        test(){
            console.log("在vuex里面，成功了")
        }
    },
    mutations: {
        _userLoginAction(_, value){
            sessionStorage.setItem("administrator",true)
            sessionStorage.setItem("logined",true)
            sessionStorage.setItem("userInfo",{
                nickname: value,
                avatar:"https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
            })
        }
    },
    // 用户信息
    state: {},
    getters: {}
}