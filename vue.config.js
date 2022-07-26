/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 21:15:32
 * @LastEditors: 七画一只妖
 * @LastEditTime: 2022-07-25 20:31:49
 * @Description: file content
 */

module.exports = {
  //开发时使用代理，打包后会失效，应使用nginx做代理
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
  // 打包开启gzip
  pluginOptions: {
    compression: {
      gzip: {
        filename: '[file].gz[query]',
        algorithm: 'gzip',
        include: /\.(js|css|html|svg|json)(\?.*)?$/i,
        minRatio: 0.8
      }
    }
  },
  // 打包设置
  productionSourceMap: false, // 去除生产环境sourceMap
}
