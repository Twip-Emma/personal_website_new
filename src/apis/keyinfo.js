/*
 * @Author: 七画一只妖
 * @Date: 2022-07-27 17:38:18
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-25 13:36:11
 * @Description: file content
 */
import axios from "axios"

export default {
    // 获取一个新密钥
    async getNewKeyApi(time) {
        var _data = undefined
        await axios.get("/blog/api/addsetukey?time=" + time).then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 随机一言
    async getOneTalk() {
        var _data = undefined
        await axios.get("https://tenapi.cn/v2/yiyan").then(
            response => {
                _data = response.data
            }
        )
        return _data
    }
}