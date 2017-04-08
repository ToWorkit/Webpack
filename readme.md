#### webpack

# 版本很重要！

# 版本很重要！

# 版本很重要！

## 重要的事情说三遍

* app
  * 存放原始数据和书写的JavaScript模块
* public
  * 存放准备给浏览器读取的数据(包括webpack生成的打包后的js文件以及一个index.html文件)


##### 在webpack中使用 -S-D 有时会失效，建议使用--save-dev

#### loader

* 注意loaders的处理顺序是从右到左
```javascript
// 处理loader
  module: {
    loaders: [
      {
        test: /\.css$/,
        // 注意loader
        loader: 'style-loader!css-loader',
        include: APP_PATH
      }
    ]
  }
```

* 注意使用sass是需要安装依赖包

  * node-sass

    ```
    //在项目下，运行下列命令行
    npm install --save-dev sass-loader
    //因为sass-loader依赖于node-sass，所以还要安装node-sass
    npm install --save-dev node-sass
    ```

* 处理图片
 ``` javascript
  {
       test: /\.(png|jpg|jpeg)$/,
       loader: 'file-loader',
       options: {
         name: '[name].[ext]?[hash]'
       }
   }

 ```

