/*
 * @Author: 七画一只妖
 * @Date: 2022-07-05 19:12:59
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-08-23 11:20:59
 * @Description: file content
 */
import axios from 'axios'


export default {
    testShow() {
        console.log("进入了自定义的axios")
    },
    // 用户登录
    async userLoginAction(value) {
        console.log(value)
        var flag = false
        await axios.post("/api/higanbana/blog/user/login", value).then(
            response => {
                if (response.data.code === 200) {
                    flag = true
                    _setUserData(response.data)
                } else {
                    flag = response.data.code
                }
            },
            error => {
                if(error.code === "ERR_BAD_RESPONSE"){
                    localStorage.clear()
                }
                console.log(error.message)
            }
        )
        return flag
    },
    // 用户注册
    async userRegisterAction(value) {
        console.log(value)
        var flag = false
        await axios.post("/api/higanbana/blog/user/register", value).then(
            response => {
                if (response.data.code === 200) {
                    flag = true
                    _setUserData(response.data)
                } else {
                    flag = response.data.code
                }
            },
            error => {
                if(error.code === "ERR_BAD_RESPONSE"){
                    localStorage.clear()
                }
                console.log(error.message)
            }
        )
        return flag
    },
    // 获取头像列表
    async getAllAvatarApi() {
        console.log("获取头像列表")
        var _data = undefined
        await axios.get("/api/higanbana/blog/user/getallavatar", {
            headers: {
                'Currency': localStorage.getItem("token")
            }
        }).then(
            response => {
                if (response.data.code === 200) {
                    _data = response.data.data
                } else {
                    _data = response.data.code
                }
            },
            error => {
                if(error.code === "ERR_BAD_RESPONSE"){
                    localStorage.clear()
                }
                console.log(error.message)
            }
        )
        return _data
    },
    // 修改用户信息(名字与头像)
    async changeUserInfoApi(name, url) {
        console.log("修改用户信息")
        var _data = undefined
        var id = localStorage.getItem("userId")
        await axios.post("/api/higanbana/blog/user/updateuser", {
            "id": id,
            "nickname": name,
            "avatar": url
        },
            {
                headers: {
                    'Currency': localStorage.getItem("token")
                }
            }).then(
                response => {
                    _data = response.data.code
                    if (_data === 200) {
                        response.data.data.token = localStorage.getItem("token")
                        _setUserData(response.data)
                    }
                },
                error => {
                    if(error.code === "ERR_BAD_RESPONSE"){
                    localStorage.clear()
                }
                    console.log(error.message)
                }
            )
        return _data
    },
    // 获取所有用户信息
    async getAllUserApi() {
        console.log("获取头像列表")
        var _data = undefined
        await axios.get("/api/higanbana/blog/user/getalluser", {
            headers: {
                'Currency': localStorage.getItem("token")
            }
        }).then(
            response => {
                _data = response.data
            },
            error => {
                if(error.code === "ERR_BAD_RESPONSE"){
                    localStorage.clear()
                }
                console.log(error.message)
                _data = ""
            }
        )
        return _data
    },
    // 删除指定用户
    async deleteUser(id) {
        console.log("修改用户信息")
        var _data = undefined
        await axios.post("/api/higanbana/blog/user/deleteuser", {
            "id": id
        },
            {
                headers: {
                    'Currency': localStorage.getItem("token")
                }
            }).then(
                response => {
                    _data = response.data
                },
                error => {
                    if(error.code === "ERR_BAD_RESPONSE"){
                    localStorage.clear()
                }
                    console.log(error.message)
                }
            )
        return _data
    },
    // 修改用户信息（管理员操作的、用户全部信息）
    async changeAllUserInfoApi(userData) {
        var _data = undefined
        await axios.post("/api/higanbana/blog/user/updateuser", userData,
            {
                headers: {
                    'Currency': localStorage.getItem("token")
                }
            }).then(
                response => {
                    _data = response.data
                },
                error => {
                    if(error.code === "ERR_BAD_RESPONSE"){
                    localStorage.clear()
                }
                    console.log(error.message)
                }
            )
        return _data
    },
    // 获取所有用户信息
    async checkTokenBeforeEach() {
        console.log("获取头像列表")
        var _data = undefined
        var token = undefined
        if(localStorage.getItem("token")){
            token = localStorage.getItem("token")
        } 
        await axios.get("/api/higanbana/blog/user/checktoken?token=" + token).then(
            response => {
                if (response.data.code === 200){
                    _data = true
                }else{
                    _data = false
                }
            },
            error => {
                if(error.code === "ERR_BAD_RESPONSE"){
                    localStorage.clear()
                }
                console.log(error.message)
                _data = false
            }
        )
        return _data
    },
}

// 存入登录信息
function _setUserData(value) {
    localStorage.setItem("loginStatus", "ok")
    localStorage.setItem("adminStatus", "ok")
    localStorage.setItem("administrator", value.data.isadmin)
    localStorage.setItem("logined", 1)
    localStorage.setItem("loginedFlag", 1)
    localStorage.setItem("userId", value.data.id)
    localStorage.setItem("userInfo", JSON.stringify({
        nickname: value.data.nickname,
        avatar: value.data.avatar,
    }))

    // 存储token
    localStorage.setItem("token", value.data.token)

    // 设置初始博客页面
    localStorage.setItem("blogListPage", 1)
}