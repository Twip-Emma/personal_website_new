/*
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-06-16 16:35:28
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-06-20 13:43:22
 * @FilePath: \personal_website\src\apis\file.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

export default {
    // 上传头像
    async uploadAvatar(data) {
        var _data = undefined
        const token = localStorage.getItem('token');
        await axios.post("/higanbana/file/upload/image", data, {
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