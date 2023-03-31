/*
 * @Author: 七画一只妖
 * @Date: 2022-07-05 19:12:59
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-03-31 11:28:32
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
        await axios.post("/higanbana/blog/user/login", value).then(
            response => {
                flag = true
                _setUserData(response.data)
            }
        )
        return flag
    },
    // 用户注册
    async userRegisterAction(value) {
        console.log(value)
        var flag = false
        await axios.post("/higanbana/blog/user/register", value).then(
            response => {
                flag = true
                _setUserData(response.data)
            }
        )
        return flag
    },
    // 获取头像列表
    async getAllAvatarApi() {
        console.log("获取头像列表")
        var _data = undefined
        await axios.get("/higanbana/blog/user/getallavatar").then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 修改用户信息(名字与头像)
    async changeUserInfoApi(name, url) {
        console.log("修改用户信息(名字与头像)")
        var _data = undefined
        var id = localStorage.getItem("userId")
        await axios.post("/higanbana/blog/user/updateuser", {
            "id": id,
            "nickname": name,
            "avatar": url
        }).then(
                response => {
                    _data = response.data.code
                    response.data.token = localStorage.getItem("token")
                    _setUserData(response.data)
                }
            )
        return _data
    },
    // 获取所有用户信息
    async getAllUserApi() {
        console.log("获取所有用户信息")
        var _data = undefined
        await axios.get("/higanbana/blog/user/getalluser").then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 删除指定用户
    async deleteUser(id) {
        console.log("删除指定用户")
        var _data = undefined
        await axios.post("/higanbana/blog/user/deleteuser",{
            "id":id
        }).then(
                response => {
                    _data = response.data
                }
            )
        return _data
    },
    // 修改用户信息（管理员操作的、用户全部信息）
    async changeAllUserInfoApi(userData) {
        var _data = undefined
        await axios.post("/higanbana/blog/user/updateuser", userData).then(
                response => {
                    _data = response.data
                }
            )
        return _data
    },
    // 获取所有用户信息
    async checkTokenBeforeEach() {
        console.log("获取头像列表")
        var _data = true
        var token = undefined
        if(localStorage.getItem("token")){
            token = localStorage.getItem("token")
        } 
        await axios.get("/higanbana/blog/user/checktoken?token=" + token)
        return _data
    },
}

// 存入登录信息
function _setUserData(value) {
    localStorage.setItem("loginStatus", "ok")
    localStorage.setItem("adminStatus", "ok")
    localStorage.setItem("administrator", value.isadmin)
    localStorage.setItem("logined", 1)
    localStorage.setItem("loginedFlag", 1)
    localStorage.setItem("userId", value.id)
    localStorage.setItem("userInfo", JSON.stringify({
        nickname: value.nickname,
        avatar: value.avatar,
    }))

    // 存储token
    localStorage.setItem("token", value.token)

    // 设置初始博客页面
    localStorage.setItem("blogListPage", 1)
}