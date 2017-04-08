// 引入包
let path = require('path')
let HtmlwebpackPlugin = require('html-webpack-plugin')

// 定义文件夹的路径
const ROOT_PATH = path.resolve(__dirname)
// 合并该文件夹下的
const APP_PATH = path.resolve(ROOT_PATH, 'app')
// 合并后放入该文件下
const BUILD_PATH = path.resolve(ROOT_PATH, 'build')

module.exports = {
  // 项目文件夹，默认会找index.js,也可以设置
  // 入口
  entry: APP_PATH,
  // 出口
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  // 热加载
  devServer: {
    contentBase: "./build",
    historyApiFallback: true,
    hot: true,
    inline: true
  },
  // 处理loader
  module: {
    loaders: [
      // sass
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      // 处理图片
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // 使用包
  plugins: [
    new HtmlwebpackPlugin({
      title: '你好,世界,请善待每一个努力奋斗的人'
    })
  ]
}

