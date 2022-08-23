/*
 * @Author: 七画一只妖
 * @Date: 2022-07-09 10:26:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-08-23 11:19:19
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
        await axios.get("/api/higanbana/blog/blog/selectbloglistbypage?page=" + page, {
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
    // 模糊搜索博客（分页+模糊搜索）
    async getBlogListByName() {
        console.log("请求了博客列表（分页+模糊）")
        var page = localStorage.getItem("blogListPage")
        var name = localStorage.getItem("searchName")
        var _data = undefined
        if (!page) {
            page = 1
        }
        await axios.get("/api/higanbana/blog/blog/selectbloglistbyname?page=" + page + "&name=" + name, {
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
    // 获取博客总数
    async getBlogTotalCount() {
        console.log("请求了博客总数")
        var _data = undefined
        await axios.get("/api/higanbana/blog/blog/selectbloglisttotalcount", {
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
    // 获取博客总数（分页+模糊搜索）
    async getBlogTotalCountByName() {
        console.log("请求了博客总数")
        var name = localStorage.getItem("searchName")
        if (!name) {
            name = ""
        }
        var _data = undefined
        await axios.get("/api/higanbana/blog/blog/selectbloglisttotalcountbyname?name=" + name, {
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
    // 获取博客评论
    async getBlogReplyById() {
        console.log("请求了评论列表")
        var _data = undefined
        var id = localStorage.getItem("blogId")
        if (!id) {
            id = "0"
        }
        await axios.get("/api/higanbana/blog/blog/selectblogreplybyid?blogid=" + id, {
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
        // console.log(_data)
        return _data
    },
    // 发表博客评论
    async publishContentApi(content) {
        console.log("发表了评论")
        var _data = undefined
        await axios.post("/api/higanbana/blog/blog/addblogreply", {
            "userId": localStorage.getItem("userId"),
            "articleId": localStorage.getItem("blogId"),
            "content": content
        },
            {
                headers: {
                    'Currency': localStorage.getItem("token")
                }
            }).then(
                response => {
                    _data = response.data.code
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
    // 根据ID获取博客
    async getBlogInfoByIdApi() {
        console.log("请求了评论列表")
        var _data = undefined
        var id = localStorage.getItem("blogId")
        if (!id) {
            id = "0"
        }
        await axios.get("/api/higanbana/blog/blog/getbloginfobyid?blogid=" + id, {
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
}