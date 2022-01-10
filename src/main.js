import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'
import App from './App.vue'
// import 'element-ui/lib/theme-chalk/index.css'
import './theme/index.css'
import './style/index.scss'
import store from './store/index.js'
import './mock'
import i18n from './i18n'
import './router/permission'

Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  i18n
}).$mount('#app')
