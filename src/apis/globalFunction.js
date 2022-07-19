/*
 * @Author: 七画一只妖
 * @Date: 2022-07-19 11:27:15
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-19 12:11:10
 * @Description: file content
 */
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
}