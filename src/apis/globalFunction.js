/*
 * @Author: 七画一只妖
 * @Date: 2022-07-19 11:27:15
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-19 19:05:35
 * @Description: file content
 */
import axios from 'axios'

export default {
    // 将时间戳转换成可视化时间
    formatTimeApi(baseTime){
        // let baseTime = 1523721600000
        
        // let time = moment(baseTime).format()
        
        let d = new Date(baseTime);
        
        let batchDate = d.getFullYear() + '年' + (d.getMonth() + 1) + '月' + d.getDate() +'日'
        
        let batchTime = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds(); 
        
        console.log(baseTime); // 时间戳
        // console.log(time); // 标准时间
        console.log(d); // 中国标准时间
        console.log(batchDate); // 年月日
        console.log(batchTime); // 详细的年月日时分秒
        return batchTime
    },
    async getAllMessageApi(){
        console.log("请求了留言")
        var _data = undefined
        await axios.get("/api/higanbana/blog/global/getallmessage",{
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
    async publishMessageApi(content){
        console.log("发表了评论")
        var _data = undefined
        await axios.post("/api/higanbana/blog/global/addmessage", {
            "userId":sessionStorage.getItem("userId"),
            "content":content
        },
        {
            headers: {
                'Currency' : sessionStorage.getItem("token")
            }
        }).then(
            response => {
                _data = response.data.code
            },
            error => {
                console.log(error.message)
            }
        )
        return _data
    }
}