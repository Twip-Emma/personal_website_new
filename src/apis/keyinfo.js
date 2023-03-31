/*
 * @Author: 七画一只妖
 * @Date: 2022-07-27 17:38:18
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-08-23 11:20:45
 * @Description: file content
 */
import axios from "axios"

export default {
    // 获取一个新密钥
    async getNewKeyApi(time){
        console.log(time)
        var _data = undefined
        await axios.get("/higanbana/api/addsetukey?time=" + time, {
            headers: {
                'Currency': localStorage.getItem("token")
            }
        }).then(
            response => {
                _data = response.data
            }
        )
        return _data
    }
}