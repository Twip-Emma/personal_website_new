/*
 * @Author: 七画一只妖
 * @Date: 2022-07-19 11:27:15
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-06-01 19:45:33
 * @Description: file content
 */
import axios from 'axios'

export default {
    // 将时间戳转换成可视化时间
    formatTimeApi(baseTime) {
        let d = new Date(baseTime);
        let batchTime = d.getFullYear() + '年' + this._zeroTimeFormat(d.getMonth() + 1) + '月' + this._zeroTimeFormat(d.getDate()) + '日 ' + this._zeroTimeFormat(d.getHours()) + ':' + this._zeroTimeFormat(d.getMinutes()) + ':' + this._zeroTimeFormat(d.getSeconds());
        return batchTime
    },
    // 将时间戳转换成可视化时间（短的）
    formatTimeShortApi(baseTime) {
        let d = new Date(baseTime);
        let batchTime = d.getFullYear() + '-' + this._zeroTimeFormat(d.getMonth() + 1) + '-' + this._zeroTimeFormat(d.getDate())
        return batchTime
    },
    formatTagsApi(tag) {
        if (!tag) {
            return []
        }
        const tagsList = tag.split("|")
        return tagsList.map((item, index) => {
            return {
                id: index + 1,
                name: item
            }
        })
    },
    // 查询所有留言
    async getAllMessageApi(page = 1, text = "") {
        console.log("请求了留言")
        var _data = undefined
        await axios.get("/blog/blog/global/getallmessage?page=" + page + (text ? "&text=" + text : "")).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 用户发表留言
    async publishMessageApi(content) {
        console.log("发表了评论")
        var _data = 200
        await axios.post("/blog/blog/global/addmessage", {
            "content": content
        })
        return _data
    },
    _zeroTimeFormat(number) {
        if (number < 10) {
            return "0" + number;
        } else {
            return number;
        }
    },
    // 修改留言
    async updateMessage(content) {
        console.log("发表了评论")
        var _data = 200
        await axios.post("/blog/blog/global/updateMessage", content)
        return _data
    },
    // 删除留言
    async deleteMessage(id) {
        console.log("发表了评论")
        var _data = 200
        await axios.get("/blog/blog/global/deleteMessage?id=" + id)
        return _data
    },
}