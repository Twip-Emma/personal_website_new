/*
 * @Author: 七画一只妖
 * @Date: 2022-07-27 17:38:18
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-27 17:41:16
 * @Description: file content
 */
import axios from "axios"

export default {
    // 获取一个新密钥
    getNewKeyApi(time){
        var _data = undefined
        await axios.get("/api/higanbana/blog/user/getallavatar?key=" + time, {
            headers: {
                'Currency': sessionStorage.getItem("token")
            }
        }).then(
            response => {
                _data = response.data
            },
            error => {
                console.log(error.message)
            }
        )
        return _data
    }
}