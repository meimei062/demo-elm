import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

const langFiles = require.context('./config', false, /\.js$/)
const regExp = /\.\/([^\.\/]+)\.([^\.]+)$/ // 正则用于匹配 ./en.js中的'en'

// regExp.exec('./en.js')

const messages = {} // 声明一个数据模型，对应i18n中的message属性

langFiles.keys().forEach(key => {
  const prop = regExp.exec(key)[1] // 正则匹配en|zh这样的值
  // messages[prop]相当于 messages['en'] = {table:{...}}
  messages[prop] = langFiles(key).default
})

const locale = localStorage.getItem('lang') || 'zh' // 从localstorag中获取

export default new VueI18n({
  locale,
  messages
})
