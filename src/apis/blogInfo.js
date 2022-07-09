/*
 * @Author: 七画一只妖
 * @Date: 2022-07-09 10:26:35
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-09 12:04:18
 * @Description: file content
 */
import axios from 'axios'

export default {
    // 获取博客列表
    async getBlogListByPage(){
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
    }
}