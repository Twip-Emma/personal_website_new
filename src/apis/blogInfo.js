/*
 * @Author: 七画一只妖
 * @Date: 2022-07-09 10:26:35
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-04-04 18:38:29
 * @Description: file content
 */
import axios from 'axios'

export default {
    // 获取博客列表（只加一个参数时则不模糊）
    async getBlogList(page = 1, name = "") {
        var _data = undefined
        await axios.get("/higanbana/blog/blog/selectbloglist" + (name ? "byname" : "bypage") + "?page=" + page + (name ? "&name=" + name : "")).then(
            response => {
                _data = response.data
            },
            error => {
                if (error.code === "ERR_BAD_RESPONSE") {
                    localStorage.clear()
                }
                console.log(error.message)
            }
        )
        return _data
    },
    // 获取博客总数
    async getBlogTotalCount(name = '') {
        var url = name ? `/higanbana/blog/blog/selectbloglisttotalcountbyname?name=${name}` : '/higanbana/blog/blog/selectbloglisttotalcount'
        var _data = undefined
        await axios.get(url).then(
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