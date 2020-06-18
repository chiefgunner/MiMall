module.exports = {
  devServer: {
    host: 'localhost',
    port: 8086,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: false,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
