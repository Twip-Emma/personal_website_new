/*
 * @Author: 七画一只妖
 * @Date: 2022-07-05 19:12:59
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2024-05-07 16:56:44
 * @Description: file content
 */
import axios from 'axios'


export default {
    testShow() {
        console.log("进入了自定义的axios")
    },
    // 获取用户信息
    async setUserInfo() {
        await axios.get("/blog/blog/user/getUserInfo").then(
            response => {
                _setUserData(response.data)
            }
        )
    },
    // 用户登录
    async userLoginAction(value) {
        var flag = false
        await axios.post("/blog/blog/user/login", value).then(
            response => {
                flag = true
                _setUserData(response.data)
            }
        )
        return flag
    },
    // 用户注册
    async userRegisterAction(value) {
        var flag = false
        await axios.post("/blog/blog/user/register", value).then(
            response => {
                flag = true
                _setUserData(response.data)
            }
        )
        return flag
    },
    // 获取头像列表
    async getAllAvatarApi() {
        var _data = undefined
        await axios.get("/blog/blog/user/getallavatar").then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 修改用户信息(名字与头像)
    async changeUserInfoApi(name, pass, avatar) {
        var _data = undefined
        if (pass == null || pass == '') {
            await axios.post("/blog/blog/user/updateuser", {
                "nickname": name,
                "avatar": avatar
            })
        } else {
            await axios.post("/blog/blog/user/updateuser", {
                "nickname": name,
                "pass": pass,
                "avatar": avatar
            })
        }
        return _data
    },
    // 获取所有用户信息
    async getAllUserApi(page = 1, name = "") {
        var _data = undefined
        await axios.get("/blog/blog/user/getalluser?page=" + page + (name ? "&name=" + name : "")).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 修改用户信息（管理员操作的、用户全部信息）
    async changeAllUserInfoApi(userData) {
        var _data = undefined
        await axios.post("/blog/blog/user/updatealluser", userData).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 修改用户信息（超级管理员操作的、用户权限）
    async updateUserPermission(targetId, targetPermission) {
        var _data = undefined
        await axios.get("/blog/blog/user/updateUserPermission?targetId=" + targetId + "&targetPermission=" + targetPermission).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 删除用户
    async deleteUser(id) {
        await axios.get("/blog/blog/user/deleteUser?id=" + id)
    },
    // 获取所有用户数量（管理员界面的用户界面）
    async getUserCount() {
        var _data = undefined
        await axios.get("/blog/blog/user/getUserCount").then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 根据当前用户token获取用户实体
    async getUserByToken() {
        var _data = undefined
        await axios.get("/blog/blog/user/getUserInfo").then(
            response => {
                _data = response.data
            }
        )
        return _data
    }
}

// 存入登录信息
function _setUserData(value) {
    localStorage.setItem("loginStatus", "ok")
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