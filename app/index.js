// 引入包(依赖)
import './main.scss'
import sub from './sub'
// console.log(sub())
// 使用jQuery
import $ from 'jquery'
// moment时间插件
import moment from 'moment'

let app = document.createElement('div')

const myPromise = Promise.resolve(18)

myPromise.then((age) => {
  $('body').append('<h1>'+ age +'岁,'+ moment().format()+'</h2>')
})

document.body.appendChild(app)
app.innerHTML = "<h3>加油</h3>"
app.appendChild(sub())

