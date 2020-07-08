module.exports = {
  devServer: {
    host: 'localhost',
    port: 8086,
    proxy: {
      '/api/map': {
        target: 'https://apis.map.qq.com/ws/district/v1',
        changeOrigin: true,
        pathRewrite: {
          '/api/map': ''
        }
      },
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  productionSourceMap: false, // 是否开启源码
  chainWebpack: config => {
    config.plugins.delete('prefetch')// 删除预加载
  }
}
