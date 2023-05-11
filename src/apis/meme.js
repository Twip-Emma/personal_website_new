/*
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-10 16:47:49
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-11 14:26:39
 * @FilePath: \personal_website\src\apis\meme.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios"

export default {
    // 查询所有meme
    async query() {
        var _data = undefined
        await axios.get("/higanbana/meme/query").then(
            response => {
                _data = response.data
            }
        )
        return _data
    },
    // 查询某个meme的点赞情况
    async queryLike(memeId) {
        var _data = undefined
        await axios.get("/higanbana/meme/queryLike?memeId=" + memeId).then(
            response => {
                _data = response.data
            }
        )
        return _data ? true : false
    },
    // 点赞/取消赞
    async updateLike(memeId, type) {
        var _data = undefined
        await axios.get("/higanbana/meme/updateLike?memeId=" + memeId + "&type=" + type).then(
            response => {
                _data = response.data
            }
        )
        return _data
    }
}