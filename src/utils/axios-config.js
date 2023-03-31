/*
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2023-03-31 10:55:45
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-03-31 11:14:27
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
    return response.data;
  } else {
    Message.error(`请求失败，错误码：${response.status}`);
    return Promise.reject(response);
  }
}, (error) => {
  // 对响应错误做些什么
  if (error.response.status === 502) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  } else {
    Message.error(`请求失败，错误码：${error.response.status}`);
  }
  return Promise.reject(error);
});