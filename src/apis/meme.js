/*
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-05-10 16:47:49
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-10 16:48:06
 * @FilePath: \personal_website\src\apis\meme.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios"

export default {
    // 获取一个新密钥
    async query(){
        var _data = undefined
        await axios.get("/higanbana/meme/query").then(
            response => {
                _data = response.data
            }
        )
        return _data
    }
}