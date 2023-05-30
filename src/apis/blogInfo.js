/*
 * @Author: 七画一只妖
 * @Date: 2022-07-09 10:26:35
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-30 16:46:47
 * @Description: file content
 */
import axios from 'axios'

export default {
    // 获取博客列表（只加一个参数时则不模糊）
    async getBlogList(page = 1, name = "") {
        if (!localStorage.getItem("userInfo")) {
            return undefined
        }
        var _data = undefined
        await axios.get("/higanbana/blog/blog/selectbloglist" + (name ? "byname" : "bypage") + "?page=" + page + (name ? "&name=" + name : "")).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 获取博客列表（只加一个参数时则不模糊）（管理员界面）
    async queryAllBlog(page = 1, name = "") {
        var _data = undefined
        await axios.get("/higanbana/blog/blog/queryAllBlog?page=" + page + (name ? "&name=" + name : "")).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 获取博客总数
    async getBlogTotalCount(name = '') {
        if (!localStorage.getItem("userInfo")) {
            return undefined
        }
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
    async getBlogReplyById(blogId) {
        console.log("请求了评论列表")
        var _data = undefined
        var id = blogId || sessionStorage.getItem("blogId")
        await axios.get("/higanbana/blog/blog/selectblogreplybyid?blogid=" + id).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 发表博客评论
    async publishContentApi(content, blogId) {
        console.log("发表了评论")
        var _data = 200
        const articleId = blogId || sessionStorage.getItem("blogId")
        await axios.post("/higanbana/blog/blog/addblogreply", {
            "articleId": articleId,
            "content": content
        })
        return _data
    },
    // 根据ID获取博客
    async getBlogInfoByIdApi(id) {
        console.log(id, "blogid")
        const _id = id || sessionStorage.getItem("blogId");
        const { data } = await axios.get(`/higanbana/blog/blog/getbloginfobyid?blogid=${_id}`);
        return data;
    },
    // 发布博客
    async publishBlog(blogInfo) {
        await axios.post("/higanbana/blog/blog/add", blogInfo)
    },
    // 获取博客数量数据（饼图用）
    async getBlogCountData() {
        var _data = undefined
        await axios.get("/higanbana/blog/blog/getBlogCountData").then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    async queryBlogListByUser() {
        var _data = undefined
        await axios.get("/higanbana/blog/blog/queryBlogListByUser").then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 修改博客
    async updateBlogByUser(blogInfo) {
        await axios.post("/higanbana/blog/blog/updateBlogByUser", blogInfo)
    },
}