/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 21:15:32
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-04 10:34:27
 * @Description: file content
 */
const webpack = require('webpack');
module.exports = {
  configureWebpack: {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:10010',
          changeOrigin: true,
          ws: true,
          pathRewrite: {
            '^/api': ''
          }
        }
      }
    },
    // reslove: {
    //   alias: {
    //     "@@" : reslove('src')
    //   }
    // }
  }
}