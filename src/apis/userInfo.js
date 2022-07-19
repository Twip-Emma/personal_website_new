/*
 * @Author: 七画一只妖
 * @Date: 2022-07-05 19:12:59
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-19 10:07:30
 * @Description: file content
 */
import axios from 'axios'


export default {
    testShow(){
        console.log("进入了自定义的axios")
    },
    // 用户登录
    async userLoginAction(value){
        console.log(value)
        var flag = false
        await axios.post("/api/higanbana/blog/user/login", value).then(
            response => {
                if(response.data.code === 200){
                    flag = true
                    _setUserData(response.data)
                }else{
                    flag = response.data.code
                }
            },
            error => {
                console.log(error.message)
            }
        )
        return flag
    },
    // 用户注册
    async userRegisterAction(value){
        console.log(value)
        var flag = false
        await axios.post("/api/higanbana/blog/user/register", value).then(
            response => {
                if(response.data.code === 200){
                    flag = true
                    _setUserData(response.data)
                }else{
                    flag = response.data.code
                }
            },
            error => {
                console.log(error.message)
            }
        )
        return flag
    }
}

// 存入登录信息
function _setUserData(value){
    sessionStorage.setItem("loginStatus","ok")
    sessionStorage.setItem("adminStatus","ok")
    sessionStorage.setItem("administrator",value.data.isadmin)
    sessionStorage.setItem("logined",1)
    sessionStorage.setItem("loginedFlag",1)
    sessionStorage.setItem("userId", value.data.id)
    sessionStorage.setItem("userInfo",JSON.stringify({
        nickname: value.data.nickname,
        avatar: value.data.avatar,
    }))

    // 存储token
    sessionStorage.setItem("token","kkjb")

    // 设置初始博客页面
    sessionStorage.setItem("blogListPage",1)
}