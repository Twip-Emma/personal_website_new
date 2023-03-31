/*
 * @Author: 七画一只妖
 * @Date: 2022-07-09 10:26:35
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-03-31 15:03:53
 * @Description: file content
 */
import axios from 'axios'

export default {
    // 获取博客列表（全局分页查询）
    async getBlogListByPage() {
        console.log("请求了博客列表")
        var page = localStorage.getItem("blogListPage")
        var _data = undefined
        if (!page) {
            page = 1
        }
        await axios.get("/higanbana/blog/blog/selectbloglistbypage?page=" + page).then(
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
    // 模糊搜索博客（分页+模糊搜索）
    async getBlogListByName() {
        console.log("请求了博客列表（分页+模糊）")
        var page = localStorage.getItem("blogListPage")
        var name = localStorage.getItem("searchName")
        var _data = undefined
        if (!page) {
            page = 1
        }
        await axios.get("/higanbana/blog/blog/selectbloglistbyname?page=" + page + "&name=" + name).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 获取博客总数
    async getBlogTotalCount() {
        console.log("请求了博客总数")
        var _data = undefined
        await axios.get("/higanbana/blog/blog/selectbloglisttotalcount").then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 获取博客总数（分页+模糊搜索）
    async getBlogTotalCountByName() {
        console.log("请求了博客总数")
        var name = localStorage.getItem("searchName")
        if (!name) {
            name = ""
        }
        var _data = undefined
        await axios.get("/higanbana/blog/blog/selectbloglisttotalcountbyname?name=" + name).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 获取博客评论
    async getBlogReplyById() {
        console.log("请求了评论列表")
        var _data = undefined
        var id = localStorage.getItem("blogId")
        if (!id) {
            id = "0"
        }
        await axios.get("/higanbana/blog/blog/selectblogreplybyid?blogid=" + id).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 发表博客评论
    async publishContentApi(content) {
        console.log("发表了评论")
        var _data = 200
        await axios.post("/higanbana/blog/blog/addblogreply", {
            "userId": localStorage.getItem("userId"),
            "articleId": localStorage.getItem("blogId"),
            "content": content
        })
        return _data
    },
    // 根据ID获取博客
    async getBlogInfoByIdApi() {
        console.log("请求了评论列表")
        var _data = undefined
        var id = localStorage.getItem("blogId")
        if (!id) {
            id = "0"
        }
        await axios.get("/higanbana/blog/blog/getbloginfobyid?blogid=" + id).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
}