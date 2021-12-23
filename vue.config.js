'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  devServer: {
    host: '0.0.0.0',
    port: '9008',
    proxy: {
      '/*': {
        target: ''
      }
    }
  },
  configureWebpack: {
    name: 'Web',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}
