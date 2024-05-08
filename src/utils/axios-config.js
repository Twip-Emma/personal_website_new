/*
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-03-31 10:55:45
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2024-05-07 16:12:17
 * @FilePath: \personal_website\src\utils\axios-config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios';
import { Message } from 'element-ui';

axios.defaults.baseURL = "/api"

// 添加请求拦截器
axios.interceptors.request.use((config) => {
    // 在请求发送之前做些什么
    const token = localStorage.getItem('token');
    if (token && !config.url.includes('/login') && !config.url.includes('/register')) {
        config.headers.Currency = token;
    }
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
    // 对响应数据做些什么
    if (response.status === 200) {
        // 自定义的错误（系统状态码为200，data内的状态码不是200）
        if (response.data.code === 1204) {
            Message.error(`失败！${response.data.msg}`);
            return Promise.reject(response);
        }


        return response.data;
    } else {
        Message.error(`请求失败，错误码：${response.status}`);
        return Promise.reject(response);
    }
}, (error) => {
    // 对响应错误做些什么
    if (error.response.status === 502) {
        localStorage.clear();
        window.location.href = '/#/login';
        Message.error(`请求失败，登陆已过期`);
    } else if (error.response.status === 403) {
        Message.error(`请求失败，权限不足`);
    } else if (error.response.status === 503) {
        Message.error(`请求失败，后端服务未启动完全`);
    } else {
        Message.error(`请求失败，错误信息：${error.response.data}`);
        window.location.href = '/#/login';
    }
    return Promise.reject(error);
});