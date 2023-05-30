/*
 * @Author: 七画一只妖 1157529280@qq.com
 * @Date: 2022-03-08 16:23:02
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-05-25 17:12:02
 * @FilePath: \personal_website\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: 七画一只妖
 * @Date: 2021-10-13 21:15:32
 * @LastEditors: 七画一只妖 1157529280@qq.com
 * @LastEditTime: 2023-04-21 09:36:31
 * @Description: file content
 */

module.exports = {
  // 样式无法加载：解决办法是使用 https://cdnjs.loli.net/ 替换 https://cdnjs.cloudflare.com/
  // 开发时使用代理，打包后会失效，应使用nginx做代理
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:10010/',
        changeOrigin: true,
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
