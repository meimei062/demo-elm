'use strict'
const path = require('path')
// const TerserPlugin = require('terser-webpack-plugin')

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
    // optimization: {
    //   minimize: true,
    //   minimizer: [
    //     new TerserPlugin({
    //       terserOptions: {
    //         compress: {
    //           drop_console: true,
    //           drop_debugger: false,
    //           pure_funcs: ['console.log']
    //         }
    //       }
    //     })
    //   ]
    // }
  }
}
