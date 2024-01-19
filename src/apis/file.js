/*
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-06-16 16:35:28
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2024-01-19 15:49:12
 * @FilePath: \personal_website\src\apis\file.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

export default {
    // 上传头像
    async uploadAvatar(data) {
        var _data = undefined
        const token = localStorage.getItem('token');
        await axios.post("/blog/blog/user/update/avatar", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Currency': token
            }
        }).then(
            response => {
                _data = response
            }
        )
        return _data
    },

    // 上传博客配图
    async uploadBlogImage(data) {
        var _data = undefined
        const token = localStorage.getItem('token');
        await axios.post("/blog/file/upload/blogImage", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Currency': token
            }
        }).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },

    // 上传素材图片
    async uploadMeme(data) {
        var _data = undefined
        const token = localStorage.getItem('token');
        await axios.post("/blog/file/upload/meme", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Currency': token
            }
        }).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
}