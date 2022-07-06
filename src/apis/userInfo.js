/*
 * @Author: 七画一只妖
 * @Date: 2022-07-05 19:12:59
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-06 11:19:49
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
        await axios.post("/api/higanbana/blog/login", value).then(
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
                    sessionStorage.setItem("userInfo",{
                        nickname: response.data.data.userMail,
                        avatar:"https://cdn.jsdelivr.net/gh/yuewuzhijian/cdn/yuewuzhijian/yuewuzhijian.png",
                    })
                }
            },
            error => {
                console.log(error.message)
            }
        )
        return flag
    }
}