/*
 * @Author: 七画一只妖
 * @Date: 2022-07-09 10:26:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-12 10:57:09
 * @Description: file content
 */
import axios from 'axios'

export default {
    // 获取博客列表
    async getBlogListByPage(){
        console.log("请求了博客列表")
        var page = sessionStorage.getItem("blogListPage")
        var _data = undefined
        if(!page){
            page = 1
        }
        await axios.get("/api/higanbana/blog/blog/selectbloglistbypage?page=" + page,{
            headers: {
                'Currency' : sessionStorage.getItem("token")
            }
        }).then(
            response => {
                if(response.data.code === 200){
                    _data = response.data.data
                }else{
                    _data = response.data.code
                }
            },
            error => {
                console.log(error.message)
            }
        )
        return _data
    },
    // 获取博客总数
    async getBlogTotalCount(){
        console.log("请求了博客总数")
        var _data = undefined
        await axios.get("/api/higanbana/blog/blog/selectbloglisttotalcount",{
            headers: {
                'Currency' : sessionStorage.getItem("token")
            }
        }).then(
            response => {
                if(response.data.code === 200){
                    _data = response.data.data
                }else{
                    _data = response.data.code
                }
            },
            error => {
                console.log(error.message)
            }
        )
        return _data
    },
    // 获取博客评论
    async getBlogReplyById(){
        console.log("请求了评论列表")
        var _data = undefined
        var id = sessionStorage.getItem("blogId")
        if(!id){
            id = "0"
        }
        await axios.get("/api/higanbana/blog/blog/selectblogreplybyid?blogid=" + id,{
            headers: {
                'Currency' : sessionStorage.getItem("token")
            }
        }).then(
            response => {
                if(response.data.code === 200){
                    _data = response.data.data
                }else{
                    _data = response.data.code
                }
            },
            error => {
                console.log(error.message)
            }
        )
        // console.log(_data)
        return _data
    }
}