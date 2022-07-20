/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 21:15:32
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-20 21:16:36
 * @Description: file content
 */

module.exports = {
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
  pluginOptions: {
    compression: {
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8
      }
    }
  }
}
