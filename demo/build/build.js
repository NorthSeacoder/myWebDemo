'use strict'
require('./check-versions')()

process.env.NODE_ENV = 'production'
//主要用来实现node.js命令行环境的loading效果，和显示各种状态的图标等
const ora = require('ora')
//以包的形式包装rm -rf命令，用来删除文件和文件夹的，不管文件夹是否为空，都可删除
const rm = require('rimraf')
//path 模块提供了一些用于处理文件路径的小工具，我们可以通过以下方式引入该模块
const path = require('path')
//修改控制台中字符串的样式（字体样式加粗等／字体颜色／背景颜色）
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
// 在终端显示loading效果，并输出提示
const spinner = ora('building for production...')
spinner.start()
// 删除这个文件夹 （递归删除）
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
  // 构建
  webpack(webpackConfig, (err, stats) => {
    // 构建成功
    // 停止 loading动画
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }
    // 打印提示
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
