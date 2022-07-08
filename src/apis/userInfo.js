/*
 * @Author: 七画一只妖
 * @Date: 2022-07-05 19:12:59
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-08 14:00:10
 * @Description: file content
 */
import axios from 'axios'


export default {
    testShow(){
        console.log("进入了自定义的axios")
    },
    async userLoginAction(value){
        console.log(value)
        var flag = false
        await axios.post("/api/higanbana/blog/user/login", value).then(
            response => {
                // console.log(response.data)
                // console.log(response.data.code)
                if(response.data.code === 200){
                    flag = true
                    sessionStorage.setItem("loginStatus","ok")
                    sessionStorage.setItem("adminStatus","ok")
                    sessionStorage.setItem("administrator",true)
                    sessionStorage.setItem("logined",true)
                    sessionStorage.setItem("loginedFlag",true)
                    sessionStorage.setItem("userInfo",JSON.stringify({
                        nickname: response.data.data.nickname,
                        avatar: response.data.data.avatar,
                    }))
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
    async userRegisterAction(value){
        console.log(value)
        var flag = false
        await axios.post("/api/higanbana/blog/user/register", value).then(
            response => {
                // console.log(response.data)
                // console.log(response.data.code)
                if(response.data.code === 200){
                    flag = true
                    sessionStorage.setItem("loginStatus","ok")
                    sessionStorage.setItem("adminStatus","ok")
                    sessionStorage.setItem("administrator",true)
                    sessionStorage.setItem("logined",true)
                    sessionStorage.setItem("loginedFlag",true)
                    sessionStorage.setItem("userInfo",JSON.stringify({
                        nickname: response.data.data.nickname,
                        avatar: response.data.data.avatar,
                    }))
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